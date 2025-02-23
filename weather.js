// const { dotMultiply } = require("mathjs");

const url_1='https://api.openweathermap.org/data/2.5/weather';
const url_2='https://api.openweathermap.org/data/2.5/forecast';
const apiKey = '...';



// var locInput= document.getElementById("locationInput");

// var locInput = $(document).getElementById("locationInput");
// $("#locationInput").keydown(function(){
//     locInput=$("#locationInput").value;
// })



function callApi(event)
{
    var dataInput=document.getElementById("locationInput");
    if(dataInput.addEventListener("keypress",function(event)
        {
            if(event.keyCode ===13)
                {
                  apiData_1(dataInput.value);
                  apiData_2(dataInput.value);
                }
        }));
        
}


async function apiData_1(location)
{
    const temp= `${url_1}?q=${location}&appid=${apiKey}&units=metric`;

    try{
        const res= await fetch(temp);
        const data= await res.json();
        // console.log(data);
        if(res.ok)
            {
                showApiData_1(data);
                console.log(data);
            }
            else
            {
                alert("Location Error: Location not found")
            }
    }
    catch
    {
        console.error("Error while fetching data",error);

    }
}

async function apiData_2(location)
{
    const temp= `${url_2}?q=${location}&appid=${apiKey}&units=metric`;

    try{
        const res= await fetch(temp);
        const data= await res.json();
        // console.log(data);
        if(res.ok)
            {
                showApiData_2(data);
                console.log(data);
            }
            else
            {
                alert("Location Error: Location not found")
            }
    }
    catch
    {
        console.error("Error while fetching data",error);

    }
}

function currentDate()
{
    var date = new Date();
    var dd=date.getDate();
    var mm=date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(mm<10)
        {
    return date = dd+'-0'+mm+'-'+yyyy;
    }
    else
    {
        return date = dd+'-'+mm+'-'+yyyy;
    }
    
}
function currentTime(date)
{
    var date_time =new Date();
    var date = currentDate();
    var hr=date_time.getHours(date);
    var hours = '00';
    if(hr<10)
        {
             hours = '0'+hr;
            
        }
    else
    {
        hours = hr;
    }
    var min=date_time.getMinutes(date);
    var minutes = ':00';
    if(min<10)
        {
           minutes= '0'+min;
        }
        else
        {
             minutes = min;
        }
    var secs = date_time.getSeconds(date);
    var seconds = ':00';
    if(secs<10)
        {
             seconds = '0' + secs;
        }
        else
        {
            seconds = secs;
        }
 
    return date_time = hours+':'+minutes+':'+seconds;
  

    
}


function showApiData_1(data)
{
    var apiDate=currentDate(); 
    // var apiDateToString= apiDate.toString();
    var apiTime = currentTime(apiDate);
    
    console.log(apiDate);
   console.log(apiTime);
    console.log(data);

    document.getElementById("location").innerHTML=data.name;
    document.getElementById("LastUpdatedDate").innerHTML= apiDate;
    document.getElementById("LastUpdatedTime").innerHTML= apiTime;
    document.getElementById("temperature").innerHTML= `${Math.round(data.main.temp)}&#176C`;
    if(data.main.temp > 30)
        {
            document.getElementById("temperature").classList.add("fas", "fa-sun");
        }
    else if(data.main.temp<=30)
        {

        }

    document.getElementById("maxTemp").innerHTML=`Max Temp: ${data.main.temp_max}`;
    document.getElementById("maxTemp").classList.add("fas","fa-temperature-high");
    document.getElementById("minTemp").innerHTML=`Min Temp: ${data.main.temp_min}`;
    document.getElementById("minTemp").classList.add("fas","fa-temperature-low");
    document.getElementById("rowList_1").innerHTML= ` Feels Like : ${data.main.feels_like} &#176C`;
    document.getElementById("rowList_1").classList.add("fas","fa-temperature-low");
    document.getElementById("rowList_2").innerHTML= ` Humidity : ${data.main.humidity} %`;
    document.getElementById("humidity_1").classList.add("fas","fa-humidity");
    document.getElementById("rowList_3").innerHTML=`  Pressure : ${data.main.pressure}`;
    // document.getElementById("rowList_4").innerHTML=`Wind Degree: ${data.wind.deg}`;
    document.getElementById("rowList_4").innerHTML=`Wind Speed: ${data.wind.speed}`;
    document.getElementById("rowList_4").classList.add("fas","fa-wind");
 
    
    

}
function showApiData_2(data)
{
    var apiDate=currentDate(); 
    // var apiDateToString= apiDate.toString();
    var apiTime = currentTime(apiDate);
    
    console.log(apiDate);
   console.log(apiTime);
    console.log(data);

    document.getElementById("date_1").innerHTML=`Date: ${data.list[2].dt_txt.slice(0,10)}`;
    document.getElementById("date_1").classList.add("fas","fa-calendar-alt");
    document.getElementById("time_1").innerHTML=`Time: ${data.list[2].dt_txt.slice(11,19)}`;
    document.getElementById("time_1").classList.add("fas","fa-clock");
    document.getElementById("temp_1").innerHTML=`Temperature: ${data.list[2].main.temp}&#176C`;
    document.getElementById("temp_1").classList.add("fas","fa-temperature-low");
    document.getElementById("temp_1_FeelsLike_1").innerHTML=`Feels Like: ${data.list[2].main.feels_like}&#176C`;
    document.getElementById("humidity_1").innerHTML=`Humidity: ${data.list[2].main.humidity}%`;
    document.getElementById("humidity_1").classList.add("fas","fa-humidity");
    document.getElementById("windSpeed_1").innerHTML=`Wind Speed: ${data.list[2].wind.speed} m/s`;
    document.getElementById("windSpeed_1").classList.add("fas","fa-wind");

    document.getElementById("date_2").innerHTML=`Date: ${data.list[3].dt_txt.slice(0,10)}`;
    document.getElementById("date_2").classList.add("fas","fa-calendar-alt");
    document.getElementById("time_2").innerHTML=`Time: ${data.list[3].dt_txt.slice(11,19)}`;
    document.getElementById("time_2").classList.add("fas","fa-clock");
    document.getElementById("temp_2").innerHTML=`Temperature: ${data.list[3].main.temp}&#176C`;
    document.getElementById("temp_2").classList.add("fas","fa-temperature-low");
    document.getElementById("temp_2FeelsLike_2").innerHTML=`Feels Like: ${data.list[3].main.feels_like}&#176C`;
    document.getElementById("humidity_2").innerHTML=`Humidity: ${data.list[3].main.humidity}%`;
    document.getElementById("humidity_2").classList.add("fas","fa-humidity");
    document.getElementById("windSpeed_2").innerHTML=`Wind Speed: ${data.list[3].wind.speed} m/s`;
    document.getElementById("windSpeed_2").classList.add("fas","fa-wind");

    document.getElementById("date_3").innerHTML=`Date: ${data.list[4].dt_txt.slice(0,10)}`;
    document.getElementById("date_3").classList.add("fas","fa-calendar-alt");
    document.getElementById("time_3").innerHTML=`Time: ${data.list[4].dt_txt.slice(11,19)}`;
    document.getElementById("time_3").classList.add("fas","fa-clock");
    document.getElementById("temp_3").innerHTML=`Temperature: ${data.list[4].main.temp}&#176C`;
    document.getElementById("temp_3").classList.add("fas","fa-temperature-low");
    document.getElementById("temp_3FeelsLike_3").innerHTML=`Feels Like: ${data.list[4].main.feels_like}&#176C`;
    document.getElementById("humidity_3").innerHTML=`Humidity: ${data.list[4].main.humidity}%`;
    document.getElementById("humidity_3").classList.add("fas","fa-humidity");
    document.getElementById("windSpeed_3").innerHTML=`Wind Speed: ${data.list[4].wind.speed} m/s`;
    document.getElementById("windSpeed_3").classList.add("fas","fa-wind");

    document.getElementById("date_4").innerHTML=`Date: ${data.list[5].dt_txt.slice(0,10)}`;
    document.getElementById("date_4").classList.add("fas","fa-calendar-alt");
    document.getElementById("time_4").innerHTML=`Time: ${data.list[5].dt_txt.slice(11,19)}`;
    document.getElementById("time_4").classList.add("fas","fa-clock");
    document.getElementById("temp_4").innerHTML=`Temperature: ${data.list[5].main.temp}&#176C`;
    document.getElementById("temp_4").classList.add("fas","fa-temperature-low");
    document.getElementById("temp_4FeelsLike_4").innerHTML=`Feels Like: ${data.list[5].main.feels_like}&#176C`;
    document.getElementById("humidity_4").innerHTML=`Humidity: ${data.list[5].main.humidity}%`;
    document.getElementById("humidity_4").classList.add("fas","fa-humidity");
    document.getElementById("windSpeed_4").innerHTML=`Wind Speed: ${data.list[5].wind.speed} m/s`;
    document.getElementById("windSpeed_4").classList.add("fas","fa-wind");

    document.getElementById("date_5").innerHTML=`Date: ${data.list[6].dt_txt.slice(0,10)}`;
    document.getElementById("date_5").classList.add("fas","fa-calendar-alt");
    document.getElementById("time_5").innerHTML=`Time: ${data.list[6].dt_txt.slice(11,19)}`;
    document.getElementById("time_5").classList.add("fas","fa-clock");
    document.getElementById("temp_5").innerHTML=`Temperature: ${data.list[6].main.temp}&#176C`;
    document.getElementById("temp_5").classList.add("fas","fa-temperature-low");
    document.getElementById("temp_5FeelsLike_5").innerHTML=`Feels Like: ${data.list[6].main.feels_like}&#176C`;
    document.getElementById("humidity_5").innerHTML=`Humidity: ${data.list[6].main.humidity}%`;
    document.getElementById("humidity_5").classList.add("fas","fa-humidity");
    document.getElementById("windSpeed_5").innerHTML=`Wind Speed: ${data.list[6].wind.speed} m/s`;
    document.getElementById("windSpeed_5").classList.add("fas","fa-wind");

    document.getElementById("date_6").innerHTML=`Date: ${data.list[7].dt_txt.slice(0,10)}`;
    document.getElementById("date_6").classList.add("fas","fa-calendar-alt");
    document.getElementById("time_6").innerHTML=`Time: ${data.list[7].dt_txt.slice(11,19)}`;
    document.getElementById("time_6").classList.add("fas","fa-clock");
    document.getElementById("temp_6").innerHTML=`Temperature: ${data.list[7].main.temp}&#176C`;
    document.getElementById("temp_6").classList.add("fas","fa-temperature-low");
    document.getElementById("temp_6FeelsLike_6").innerHTML=`Feels Like: ${data.list[7].main.feels_like}&#176C`;
    document.getElementById("humidity_6").innerHTML=`Humidity: ${data.list[7].main.humidity}%`;
    document.getElementById("humidity_6").classList.add("fas","fa-humidity");
    document.getElementById("windSpeed_6").innerHTML=`Wind Speed: ${data.list[7].wind.speed} m/s`;
    document.getElementById("windSpeed_6").classList.add("fas","fa-wind");

    document.getElementById("date_7").innerHTML=`Date: ${data.list[8].dt_txt.slice(0,10)}`;
    document.getElementById("date_7").classList.add("fas","fa-calendar-alt");
    document.getElementById("time_7").innerHTML=`Time: ${data.list[8].dt_txt.slice(11,19)}`;
    document.getElementById("time_7").classList.add("fas","fa-clock");
    document.getElementById("temp_7").innerHTML=`Temperature: ${data.list[8].main.temp}&#176C`;
    document.getElementById("temp_7").classList.add("fas","fa-temperature-low");
    document.getElementById("temp_7FeelsLike_7").innerHTML=`Feels Like: ${data.list[8].main.feels_like}&#176C`;
    document.getElementById("humidity_7").innerHTML=`Humidity: ${data.list[8].main.humidity}%`;
    document.getElementById("humidity_7").classList.add("fas","fa-humidity");
    document.getElementById("windSpeed_7").innerHTML=`Wind Speed: ${data.list[8].wind.speed} m/s`;
    document.getElementById("windSpeed_7").classList.add("fas","fa-wind");

    document.getElementById("date_8").innerHTML=`Date: ${data.list[9].dt_txt.slice(0,10)}`;
    document.getElementById("date_8").classList.add("fas","fa-calendar-alt");
    document.getElementById("time_8").innerHTML=`Time: ${data.list[9].dt_txt.slice(11,19)}`;
    document.getElementById("time_8").classList.add("fas","fa-clock");
    document.getElementById("temp_8").innerHTML=`Temperature: ${data.list[9].main.temp}&#176C`;
    document.getElementById("temp_8").classList.add("fas","fa-temperature-low");
    document.getElementById("temp_8FeelsLike_8").innerHTML=`Feels Like: ${data.list[9].main.feels_like}&#176C`;
    document.getElementById("humidity_8").innerHTML=`Humidity: ${data.list[9].main.humidity}%`;
    document.getElementById("humidity_8").classList.add("fas","fa-humidity");
    document.getElementById("windSpeed_8").innerHTML=`Wind Speed: ${data.list[9].wind.speed} m/s`;
    document.getElementById("windSpeed_8").classList.add("fas","fa-wind");

    document.getElementById("date_9").innerHTML=`Date: ${data.list[10].dt_txt.slice(0,10)}`;
    document.getElementById("date_9").classList.add("fas","fa-calendar-alt");
    document.getElementById("time_9").innerHTML=`Time: ${data.list[10].dt_txt.slice(11,19)}`;
    document.getElementById("time_9").classList.add("fas","fa-clock");
    document.getElementById("temp_9").innerHTML=`Temperature: ${data.list[10].main.temp}&#176C`;
    document.getElementById("temp_9").classList.add("fas","fa-temperature-low");
    document.getElementById("temp_9FeelsLike_9").innerHTML=`Feels Like: ${data.list[10].main.feels_like}&#176C`;
    document.getElementById("humidity_9").innerHTML=`Humidity: ${data.list[10].main.humidity}%`;
    document.getElementById("humidity_9").classList.add("fas","fa-humidity");
    document.getElementById("windSpeed_9").innerHTML=`Wind Speed: ${data.list[10].wind.speed} m/s`;
    document.getElementById("windSpeed_9").classList.add("fas","fa-wind");

    document.getElementById("right_navigator_1").innerHTML = `${reverseDate(data.list[11].dt_txt.slice(0,10)).slice(0,5)} `;
    document.getElementById("right_navigator_1_temp").innerHTML =` ${Math.round(data.list[11].main.temp)}&#176C`
    document.getElementById("right_navigator_2").innerHTML = `${data.list[12].dt_txt.slice(5,10)} :`;
    document.getElementById("right_navigator_2_temp").innerHTML = ` ${Math.round(data.list[12].main.temp)}&#176C`;
    document.getElementById("right_navigator_3").innerHTML = `${data.list[13].dt_txt.slice(5,10)} :`;
    document.getElementById("right_navigator_3_temp").innerHTML = `${Math.round(data.list[13].main.temp)}&#176C`;
    document.getElementById("right_navigator_4").innerHTML = `${data.list[14].dt_txt.slice(5,10)} :`;
    document.getElementById("right_navigator_4_temp").innerHTML = `${Math.round(data.list[14].main.temp)}&#176C`;
    

    



    // document.getElementById("location").innerHTML=data.name;
    // document.getElementById("LastUpdatedDate").innerHTML= apiDate;
    // document.getElementById("LastUpdatedTime").innerHTML= apiTime;
    // document.getElementById("temperature").innerHTML= `${data.main.temp}*C`;
    // document.getElementById("maxTemp").innerHTML=`Max Temp: ${data.main.temp_max}`;
    // document.getElementById("minTemp").innerHTML=`Min Temp: ${data.main.temp_min}`;
    // document.getElementById("rowList_1").innerHTML= ` Feels Like : ${data.main.feels_like} *C`;
    // document.getElementById("rowList_2").innerHTML= ` Humidity : ${data.main.humidity} *C`;
    // document.getElementById("rowList_3").innerHTML=`  Pressure : ${data.main.pressure}`;
    // // document.getElementById("rowList_4").innerHTML=`Wind Degree: ${data.wind.deg}`;
    // document.getElementById("rowList_4").innerHTML=`Wind Speed: ${data.wind.speed}`;
 
    
    

}


function reverseDate(date)
{
    var holdDateString =date.split('-');
    return `${holdDateString[2]}-${holdDateString[1]}-${holdDateString[0]}`;
}
isElementThere = false;
function showOnClick_left_button()
{
   var dom_element= document.getElementById("left_navigator");
    var openButton =document.getElementById("showScreenOnChange_left");
    var navComps = document.getElementById("navigatorComps");
    var display_body = document.getElementById("display_weather");
    var closeButton=document.getElementById("closeButton_left");
    var elWidth= navComps.offsetWidth;
    var screenSize =window.matchMedia("(max-width:600px)").matches;
    console.log(screenSize);
    if(screenSize ==true){
        console.log(dom_element.style.display);
        console.log(navComps.style.display);
        navComps.style.display="none";
   if(navComps.style.display =="none")
    {
         dom_element.setAttribute("style","visibility:visible!important; transition:width 2s linear!important;display: flex!important;flex-direction: column!important; z-index: 3!important;background-color: #ffffff!important;opacity: 10!important; position: relative!important; border: double!important; border-color: black!important; box-shadow: 2px 2px 2px!important; ");
         navComps.setAttribute("style","visibility:visible!important; transition:width 2s linear!important;display: flex!important;flex-direction: row!important; z-index: 3!important;background-color: #ffffff!important;opacity: 0.6!important; position: absolute!important;top: 35%!important; right: auto%!important; left: 0%!important; bottom: 35%!important; border: double!important; border-color: black!important; box-shadow: 2px 2px 2px!important; border-radius: 0px 20px 20px 0px!important;");
         // dom_element.setAttribute("style","visibility:visible!important;z-index:3!important;transition:width 2s linear!important;");
        document.getElementById("left_navigator_1").style.borderRadius="0px 0px 0px 0px";
        document.getElementById("weather_type_details_1").style.borderRadius="0px 0px 0px 0px";
        document.getElementById("lastUpdatedDate").style.borderRadius="0px 0px 0px 0px";
        document.getElementById("left_navigator_2").style.borderRadius="0px 0px 0px 0px";
       
         // dom_element.setAttribute("style","z-index:2!important;");
        // dom_element_button.setAttribute("style","display:none!important");
        display_body.setAttribute("style","filter:blur(5px)!important;z-index: 1!important; display: flex!important; justify-content: space-between!important; flex-direction:column!important;  background-color:#ffffff!important; position: absolute!important;opacity: 0.6!important; top: 25%!important;left: 25%!important; right: 25%!important;bottom: 25%!important; border:2px!important; border-color: black!important;border-radius: 20px!important; box-shadow: grey 2px 2px 2px 2px!important; padding:0 auto!important;");
       // navComps.appendChild(closeButton).setAttribute("style","display:block!important;height:100%!important;font-size:30px!important;border-radius: 0px 20px 20px 0px!important;");
       navComps.appendChild(closeButton).setAttribute("style","display:block!important;"); 

    }
  
    // else 
    // {
    //     dom_element.setAttribute("style","display:none!important;");

    // }
}

    
//    dom_element.style.flexDirection = "column";
//    dom_element.style.zIndex = "2";
//    dom_element.style.backgroundColor = "#ffffff";
//    dom_element.style.opacity = "0.6";
//    dom_element.style.position = "absolute";
//    dom_element.style.top = "35%";
//    dom_element.style.right = "85%";
//    dom_element.style.left = "0%";
//    dom_element.style.bottom = "35%";
//    dom_element.style.border = "double";
//    dom_element.style.borderColor = "black";
//    dom_element.style.boxShadow = "2px 2px 2px";
//    dom_element.style.borderRadius = "0px 20px 20px 0px";




     
         
}
function hideOnClick_left_button()
{
    var navComps = document.getElementById("navigatorComps");
    var openButton =document.getElementById("showScreenOnChange_left");
    var display_body = document.getElementById("display_weather");
    
    navComps.style.display="none";
    // navComps.style.transition="width 1s linear";
    // navComps.style.float="left";
    openButton.style.display="block";
    display_body.setAttribute("style","filter:blur(0px)!important;z-index: 1!important; display: flex!important; justify-content: space-between!important; flex-direction:column!important;  background-color:#ffffff!important; position: absolute!important;opacity: 0.6!important; top: 25%!important;left: 25%!important; right: 25%!important;bottom: 25%!important; border:2px!important; border-color: black!important;border-radius: 20px!important; box-shadow: grey 2px 2px 2px 2px!important; padding:0 auto!important;");
       
    // if(window.matchMedia("(min-width: not(600px))").matches)
    //     {
    //         // navComps.style.display ="flex";
    //         navComps.setAttribute("style","display:flex!important;");
    //     }
        console.log(navComps.style.display);
        // if(closeButton &&closeButton.parentNode ==navComps)
        //     {
        //         isElementThere =true;
        //     }

        // if(window.matchMedia("(min-width: 601px)").matches)
        //     {
        //         var navComps = document.getElementById("navigatorComps");
        //         var closeButton=document.getElementById("closeButton_left");
        //         if(isElementThere){
        //         navComps.removeChild(closeButton);
        //         }
        //         else
        //         {
        //             console.warn("There is no such element like closeButton");
                    
        //         }
        //     }
        //     console.log(navComps);
        //     console.log(isElementThere);
}


// console.log(document.getElementById("right_navigator").style);
function showOnClick_right_button()
{
    var right_navigator_el =document.getElementById("right_navigator");
    var closeButton_right = document.getElementById("closeButton_right");
    var right_navigatorChildElement = document.getElementById("right_navigator_subChild_1");

    // right_navigator_el.style.display =="none"
    // right_navigator_el.style.setProperty("display","inline-flex!important");
    right_navigator_el_style= getComputedStyle(right_navigator_el).display;
    console.log(right_navigator_el_style);

    console.log(right_navigator_el.classList.contains("right_navigator_class"));
    // if(right_navigator_el.classList.contains("right_navigator_class"))
    //     {
    //         right_navigator_el.classList.replace("right_navigator_class","new_right_navigator_class")
    //     }

    if(!right_navigator_el.classList.contains("right_navigator_class"))
        {
            console.log("entered the other if block");
            right_navigator_el.classList.add("right_navigator_class");
            console.log(right_navigator_el.classList.contains("right_navigator_class"));

        }
    if(getComputedStyle(right_navigator_el).display == "none" && window.matchMedia("(max-width:600px)").matches)
        {

            // if(right_navigator_el.classList.contains("right_navigator_class")&&)
            console.log("entered the if block");

            if (right_navigator_el.classList.contains("right_navigator_class"))
                {

                    right_navigator_el.classList.replace("right_navigator_class","new_right_navigator_class");
                    // right_navigator_el.classList.toggle("right_navigator_class");
                    closeButton_right.classList.replace("closeButtonRight","new_closeButtonRight");
                    // right_navigator_el.appendChild(closeButton_right);
                    right_navigator_el.insertBefore(closeButton_right,right_navigatorChildElement);
                    var display_body = document.getElementById("display_weather");
                    
                    // display_body.setAttribute("style","filter:blur(5px)!important;z-index: 1!important; display: flex!important; justify-content: space-between!important; flex-direction:column!important;  background-color:#ffffff!important; position: absolute!important;opacity: 0.6!important; top: 25%!important;left: 25%!important; right: 25%!important;bottom: 25%!important; border:2px!important; border-color: black!important;border-radius: 20px!important; box-shadow: grey 2px 2px 2px 2px!important; padding:0 auto!important;");
                    display_body.style.setProperty("filter","blur(5px)");
                    console.log(right_navigator_el.classList.contains("new_right_navigator_class"));
                }
        }
    // if(right_navigator_el.classList.add("right_navigator_class"))
    //     {
    //  right_navigator_el.style.setProperty("display","inline-flex!important");
     console.log(right_navigator_el.classList);
    // }
}
function hideOnClick_right_button()
{
    var right_navigator_el =document.getElementById("right_navigator");
    var closeButton_right = document.getElementById("closeButton_right");
    var display_body = document.getElementById("display_weather");
    if(getComputedStyle(right_navigator_el).display != "none" && window.matchMedia("(max-width:600px)").matches)
        {
            console.log("new_right_navigator_class is");
            console.log(right_navigator_el.classList.contains("new_right_navigator_class"));
            right_navigator_el.classList.replace("new_right_navigator_class","right_navigator_class");
            console.log("new_right_navigator_class is");
            console.log(right_navigator_el.classList.contains("new_right_navigator_class"));
            // display_body.setAttribute("style","filter:blur(0px)!important;z-index: 1!important; display: flex!important; justify-content: space-between!important; flex-direction:column!important;  background-color:#ffffff!important; position: absolute!important;opacity: 0.6!important; top: 25%!important;left: 25%!important; right: 25%!important;bottom: 25%!important; border:2px!important; border-color: black!important;border-radius: 20px!important; box-shadow: grey 2px 2px 2px 2px!important; padding:0 auto!important;");
     
        }
        else if(getComputedStyle(right_navigator_el).display == "none" && window.matchMedia("(min-width:600px)").matches)
        {   console.log("new_right_navigator_class is - elseif");
            console.log(right_navigator_el.classList.contains("new_right_navigator_class"));
            right_navigator_el.classList.replace("new_right_navigator_class","right_navigator_class");
            console.log("new_right_navigator_class is - elseif");
            console.log(right_navigator_el.classList.contains("new_right_navigator_class"));
            display_body.setAttribute("style","filter:blur(0px)!important;z-index: 1!important; display: flex!important; justify-content: space-between!important; flex-direction:column!important;  background-color:#ffffff!important; position: absolute!important;opacity: 0.6!important; top: 25%!important;left: 25%!important; right: 25%!important;bottom: 25%!important; border:2px!important; border-color: black!important;border-radius: 20px!important; box-shadow: grey 2px 2px 2px 2px!important; padding:0 auto!important;");
     
        }
        display_body.style.setProperty("filter","blur(0px)");
        console.log(right_navigator_el.classList.contains("right_navigator_class"));
}
function handleScreenSize(event)
{
    // var weatherComps = document.getElementById("weather_components");
        var navComps = document.getElementById("navigatorComps");
        var closeButton=document.getElementById("closeButton_left");

    if(event.matches)
    {   
        if(closeButton)
            {
        
        // weatherComps.appendChild(navComps);
            closeButton.style.display ="none";
            }
        
    }
    else
    {
        console.warn("There is no such element like closeButton");
        
    }
    
}
function addElementOnScreenChange()
{
    var navComps = document.getElementById("navigatorComps");
    var closeButton=document.getElementById("closeButton_left");
    if(!closeButton)
        {
            // closeButton.style.display="block";
            navComps.appendChild(closeButton).setAttribute("style","display:block!important;");
        }
    else
    {
        console.warn("Cannot add same element twice");
    }
}


function handleScreenElements()
{
    var right_navigator_el =document.getElementById("right_navigator");
    var closeButton_right = document.getElementById("closeButton_right");

    if( window.matchMedia("(min-width:600px)").matches)
        {   console.log("new_right_navigator_class is - elseif");
            console.log(right_navigator_el.classList.contains("new_right_navigator_class"));
            right_navigator_el.classList.replace("new_right_navigator_class","right_navigator_class");
            console.log("new_right_navigator_class is - elseif");
            console.log(right_navigator_el.classList.contains("new_right_navigator_class"));
            // right_navigator_el.removeChild(closeButton_right);
            right_navigator_el.style.display = "none";
        }


}
var screenState = window.matchMedia("(min-width:601px)");

handleScreenSize(screenState);

screenState.addEventListener("change",handleScreenSize);

var screenState_small = window.matchMedia("(max-width:600px)");

addElementOnScreenChange(screenState_small);
screenState_small.addEventListener("change",addElementOnScreenChange);
screenState.addEventListener("change",handleScreenElements);




// window.addEventListener("reload", function ()
// {
    // apiData('kolkata');
// });
