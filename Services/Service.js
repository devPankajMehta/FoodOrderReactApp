
  class Service{


     static async getRestaturents(){

     const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&page_type=DESKTOP_WEB_LISTING")
     
     return  await data.json();

    }

    static async getRestaurentDetails(id){
        
      const url="https://www.swiggy.com/dapi/menu/v4/full?lat=28.7040592&lng=77.10249019999999&menuId="+id;
      const data= await fetch(url)
     
     return  await data.json();
    }

}

export default Service;
