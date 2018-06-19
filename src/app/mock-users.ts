import { InMemoryDbService } from 'angular-in-memory-web-api';
export class MockUsers implements InMemoryDbService {
  createDb() {
    const users = [{"id":1,"first":"Teresa","last":"Collins","email":"mintgreengiraffe77@gmail.com","address":"8254 Bailey Points","created":"November 17, 2011","balance":"$102.39"},
    {"id":2,"first":"Kirk","last":"Abernathy","email":"ivoryturtle13@gmail.com","address":"1343 Kilback Ports","created":"January 4, 2014","balance":"$6,402.90"},
    {"id":3,"first":"Mossie","last":"Sipes","email":"Mossie.Sipes@loyal.name","address":"795 Lilliana Hills","created":"April 28, 2010","balance":"$8,173.30"},
    {"id":4,"first":"Liliana","last":"Hauck","email":"Liliana.Hauck@alfredo.biz","address":"195 Harris Fort","created":"June 13, 2017","balance":"$3,207.91"},
    {"id":5,"first":"Marcus","last":"Beier","email":"greywolf46@gmail.com","address":"54366 Jamar Mills","created":"February 28, 2014","balance":"$9,864.19"},
    {"id":6,"first":"Lindsay","last":"Schmidt","email":"Lindsay.Schmidt@meta.org","address":"942 Hegmann Expressway","created":"January 7, 2013","balance":"$6,509.30"},
    {"id":7,"first":"Shania","last":"Torp","email":"Shania.Torp@magdalena.com","address":"618 Keegan Overpass","created":"September 9, 2015","balance":"$5,992.54"},
    {"id":8,"first":"Buford","last":"Stehr","email":"Buford.Stehr@coleman.name","address":"71786 Jackson Locks","created":"December 5, 2009","balance":"$3,906.47"},
    {"id":9,"first":"Aimee","last":"Thompson","email":"Aimee.Thompson@vivienne.net","address":"541 Kulas Ville","created":"November 25, 2011","balance":"$2,642.89"},
    {"id":10,"first":"Gerson","last":"Buckridge","email":"Gerson.Buckridge@grant.com","address":"692 Romaguera Falls","created":"April 27, 2017","balance":"$9,561.19"},
    {"id":11,"first":"Mittie","last":"Borer","email":"ivoryrabbit16@gmail.com","address":"312 Shields Skyway","created":"April 8, 2013","balance":"$3,929.00"},
    {"id":12,"first":"Jaycee","last":"Jacobi","email":"turquoisefrog38@gmail.com","address":"6073 Johnny Forks","created":"July 29, 2015","balance":"$1,733.62"},
    {"id":13,"first":"Gia","last":"Doyle","email":"ivoryfrog81@gmail.com","address":"6201 Reilly Harbors","created":"March 21, 2011","balance":"$4,485.64"},{"id":14,"first":"Dax","last":"Reynolds","email":"Dax.Reynolds@deven.info","address":"359 Kemmer Orchard","created":"September 14, 2010","balance":"$3,460.85"},
    {"id":15,"first":"Orville","last":"Schowalter","email":"olivegiraffe11@gmail.com","address":"9108 Doug Squares","created":"August 8, 2011","balance":"$5,694.44"}
    ];
    
    return {users};
  }
}
