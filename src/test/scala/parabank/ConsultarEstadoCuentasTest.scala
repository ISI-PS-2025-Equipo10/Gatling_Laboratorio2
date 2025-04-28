package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._

class ConsultarEstadoCuentasTest extends Simulation{

  // 1 Http Conf
  val httpConf = http.baseUrl(url)
    .acceptHeader("application/json")
    //Verificar de forma general para todas las solicitudes
    .check(status.is(200))

  // 2 Scenario Definition
  val scn = scenario("Consultar estado de cuentas").
    exec(http("ConsultarEstadoCuentas")
      .get(s"/customers/$customerId/accounts")
       //Recibe información sobre el estado de las cuentas del cliente
      .check(status.is(200))
      .check(responseTimeInMillis.saveAs("responseTime"))
      .check(substring("responseTime").lte(300))
    )

  // 3 Load Scenario
  setUp(
    scn.inject(atOnceUsers(200))  //Inyecta los usuarios al mismo tiempo
    ).protocols(httpConf)  
}
