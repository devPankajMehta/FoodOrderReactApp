
  class Service{


     static async getRestaturents(){

     const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&page_type=DESKTOP_WEB_LISTING")
     
     return  await data.json();

    }

}

export default Service;
