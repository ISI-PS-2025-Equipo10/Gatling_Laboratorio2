package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._
class EscalabilidadEnTransaccTest extends Simulation{
    
  // 1 Http Conf
  val httpConf = http.baseUrl(url)
    .acceptHeader("application/json")
    //Verificar de forma general para todas las solicitudes
    .check(status.is(200))

    // 2 Scenario Definition
    val scn = scenario("Probar escalabilidad en transacciones").
        exec(http("EscalabilidadEnTransacc")
            .post(s"/transfer?fromAccountId=$fromAccountId&toAccountId=$toAccountId&amount=$ammountTransfer")
            //Envía información de la transacción en el cuerpo de la solicitud
            .check(status.is(200))

        )
    // 3 Load Scenario
    setUp(
        scn.inject(
            constantUsersPerSec(150).during(10),  //Inyecta 150 usuarios por segundo durante 10 minutos
        ) 
    ).assertions(forAll.successfulRequests.percent.lte(100)) // No deben de haber errores
    .protocols(httpConf)
    
}