(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(56)},26:function(e,t,a){},50:function(e,t,a){},52:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAAkCAYAAADFNdUdAAAABmJLR0QA/wD/AP+gvaeTAAAEYUlEQVR4nO3cv08bZxzH8c9zdo4DB3UqkWgkG4eSgeAKyUFCQiIjqiqGDpXSFCMoUksVvOSvYMjUTlmjRGqlbi1dmVAlgxI5tTLUweckitIN1/HP5O7pADEY7s7342ucyt/3ZN9z9/CSpQfs8x0CR+UmJ1WzXv8eQtyCaU5CiAi6WwnAIyHlT9f29391exA7bWMnbZZOAQCPJyY+CZnm75Dysy4j7PpFEyL1aT7fcNqJna5jJ20tZ/jv8fGBumH8AWCqRxgA+KoOvAXwjd0O7PQUO2lrOZW6lN/1GHOYlLey8fjndsPs9Bg7aTtyKlLKr3ttaSXEht0QO33ETtqE2FAEcC3oPJGZGURmZoJ7gFmHMXZ6jJ2HUTrDFGcbRjYOf0EUlpaCTvWR7Qg7/cRO0DrDQWcYSiYRmZ1tPa7u7gadsiuxk7Z+dSpBQSO3b1s+/tBiJ2396gy0YIamp3Fxbq71/OLcHIampwOjqGMnbf3sDLRgPrZYsVbbeh07aetnp+8FM5hIYHh+/sz24fl5DCYSgVCUsZO2fnf6WjBCVTGSTtuOj6TTEKrqG0UVO2ljJyCeXLkiLQfCYVy4fBkDY2NQYzEMxGJQo1GosRjU0VFA6bDWTBPNV6/Q1HU0i0U0dB1NXUejUMDbly8h372zPGzq2TNhtZ2d7PwQnJYLZjCRwNj9+1Ai3bkg1KxUUFhaQi2bPTPm5YVj52HspM3JabkMa9ksnq+vw6zV6DG1Gp6vr1tivMZOdlLXyWn7d+vNzg6Kq6swq1U6TLWK4uoq3uzskM3JTnZS5cbp+EavkslAX1mBUS4HxhjlMvSVFVQymcBznY6dtLHTvo5nyap7e9CXl2GUSv4xpRL05WVU9/Z8z9EpdtLGTutcnVauZbPQUykYBwfeMQcH0FMpkveunWInbew8m+vvYWq5HF5vbnoGvd7cRC2X83yc39hJGzvb8/TF5YXRUc8gP8cEjZ20sfM4TwtGu3rV0+R+jwkaO2lj53GeFszA+Linyf0eEzR20sbO41wvGEXToEajlmPSMCANw3JMjUahaJonVJDYSRs7T/0ctzuq8ThEKHRKIlHa2kJ+YQH5hQWUtrYA2X4lgwiFoMbjrkFBYyc7u+l0vWC0iYm25+XtbeQXF/EinUajUECjUMCLdBr5xUWUt7cdj+1m7GRnN52u7+l//+Goksngn7t3be+Nrj99iuLaGoaSSVy6cweR69fP9QMgO9nZTafrBSObTRTX1s6sTruqu7so3LyJ4Rs3zvX2VXbSxs72bO+H6VVe74voVeyk7f/iVAD822vEiZyuomOn99hJW1mBlH/2WnEi+2sU2OkndtKWUwD82GvF+yTwwGGYnR5jJ20SeKBM7e//BiGcwOekkY9DmnbPbpidHmMnbUdOBQA04FsAP/fMAjwywuEvJnO5ptN+7HQXO2k76Ww7M/EkHv9SCPGDBJJw+gfRNJUB/CWBhyFNu9fpRTsZOy1jJ22Wzv8A7DSAuTM4+RYAAAAASUVORK5CYII="},53:function(e,t,a){e.exports=a.p+"static/media/Yelp_trademark_RGB.9ea57640.png"},54:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),s=a.n(o),c=(a(26),a(3)),i=a(4),l=a(7),u=a(5),m=a(8),h=a(9),d=a(6),p=a(10),f=function(){return r.a.createElement("p",{className:"header__date heading-secondary"},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturaday"][(new Date).getDay()],", ",["January","February","March","April","May","June","July","August","September","October","November","December"][(new Date).getMonth()]," ",(new Date).getDate(),", ",(new Date).getFullYear())},y=a(11),g=a.n(y),b=(a(50),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.getWeatherInfoFromApi()},a.getWeatherInfoFromApi=function(){a.setState({loading:!0}),g.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{APPID:"cd53c49b989c30d81525e1cd618c4a0d",q:"Toronto,ca",units:"metric"}}).then(function(e){console.log(e.data),a.setState({results:e.data,loading:!1})}).catch(function(){a.setState({errorState:"Sorry we coudln't find information related to the location you search, do you want to try something else?",loading:!1})})},a.state={result:"",errorState:null,loading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"weatherData"},this.state.loading&&r.a.createElement("p",null,"loading weather information..."),!!this.state.results&&r.a.createElement("div",{className:"weatherData"},r.a.createElement("i",{className:"owf owf-".concat(this.state.results.weather[0].id," owf-5x owf-fw")}),r.a.createElement("p",{className:"weatherData__currentTemp"},Math.floor(this.state.results.main.temp),"\u2103"),r.a.createElement("p",{className:"weatherData__description"},this.state.results.weather[0].description)))}}]),t}(n.Component)),v=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__logo"},r.a.createElement(d.a,{icon:"utensils",className:"header__logoImg"})),r.a.createElement("div",{className:"header__main"},r.a.createElement(f,null),r.a.createElement("h1",{className:"header__title heading-primary"},e.title),r.a.createElement("p",{className:"header__tagline heading-tertiary"},e.tagline)),r.a.createElement("div",{className:"header__weather"},r.a.createElement(b,null)))},E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleSearchChange=function(t){e.setState({searchLocationQuery:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.searchLocationQuery)},e.state={searchLocationQuery:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"searchForm"},r.a.createElement("form",{onSubmit:function(t){return e.handleFormSubmit(t)}},r.a.createElement("label",{htmlFor:"location",arialabel:"enter address, neighbourhood, city, province or postal code",className:"searchForm__label"},"I am looking for brunch spots near"),r.a.createElement("input",{type:"text",id:"location",placeholder:"address, neighbourhood, city, province or postal code",value:this.state.searchLocationQuery,onChange:this.handleSearchChange,className:"searchForm__input"}),r.a.createElement("button",{type:"submit",className:"searchForm__button"},"Search",r.a.createElement(d.a,{icon:"search-location",className:"searchForm__icon"}))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getRestaurantsFromApi=function(e){a.setState({loading:!0}),g.a.get("https://cors-anywhere.herokuapp.com/".concat("https://api.yelp.com/v3/businesses/search?location=",e),{headers:{Authorization:"Bearer ".concat("w6LwyndCB8m26Y26lrfz_nR3N2cdDKXl9-OakCAd59gUgxrQpNEbsEOi8VyZzJDP-MdrjBkpqnEJVYq1XosiBUauqH6hoHr4epumvOQZD3262rsHK_Vd8wvd_0k_XHYx")},params:{categories:"breakfast_brunch"}}).then(function(e){console.log(e.data.businesses),a.setState({results:e.data.businesses,loading:!1})}).catch(function(e){a.setState({errorState:"Sorry we coudln't find information related to the location you search, do you want to try something else?",loading:!1})})},a.state={results:[""],errorState:null,loading:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getRestaurantsFromApi("Toronto")}},{key:"componentDidUpdate",value:function(e,t){var a=this;this.props.searchLocationQuery!==e.searchLocationQuery&&this.setState({results:[]},function(){return a.getRestaurantsFromApi(a.props.searchLocationQuery)})}},{key:"renderEmptyState",value:function(){return r.a.createElement("h2",{className:"heading-tertiary"},"`Hang tight! We are working on getting you the list of best brunch spots in your neighbourhood! `")}},{key:"renderRestaurantInfo",value:function(){var e=this.state.results.map(function(e){return r.a.createElement("div",{className:"RestaurantInfo"},r.a.createElement("img",{src:e.image_url,alt:"",className:"RestaurantInfo__img"}),r.a.createElement("h2",{className:"heading-tertiary RestaurantInfo__name"},e.name),r.a.createElement("p",{className:"RestaurantInfo__para"},r.a.createElement(d.a,{icon:"map-marker-alt",className:"RestaurantInfo__icon","aria-label":"address:"}),"Placeholder for address"),r.a.createElement("p",{className:"RestaurantInfo__para"},r.a.createElement(d.a,{icon:"phone",className:"RestaurantInfo__icon","aria-label":"phone number:"}),e.phone),r.a.createElement("img",{src:a(52),alt:"yelp ratings: ".concat(e.rating,"/5"),className:"RestaurantInfo__rating"}),r.a.createElement("p",{className:"RestaurantInfo__reviewCount"}," Based on ",e.review_count," Reviews"),r.a.createElement("a",{href:e.url,className:"RestaurantInfo__website"},"More infomration on Yelp"),r.a.createElement("img",{src:a(53),alt:"yelp",className:"RestaurantInfo__yelp"}))});return r.a.createElement("div",{className:"RestuarantList__gallery"},e)}},{key:"render",value:function(){return r.a.createElement("section",{className:"RestuarantList"},this.state.results.length?this.renderRestaurantInfo():this.renderEmptyState(),!!this.state.errorState&&r.a.createElement("h1",null,this.state.error))}}]),t}(n.Component),A=function(e){return r.a.createElement("div",{className:"footer"},e.text)},O=(a(54),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onFormSubmit=function(e){a.setState({searchLocationQuery:e})},a.state={searchLocationQuery:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{title:"Love you a brunch",tagline:"Find the perfect spot for your next weekend late morning meal."}),r.a.createElement(E,{onFormSubmit:this.onFormSubmit}),r.a.createElement(w,{searchLocationQuery:this.state.searchLocationQuery}),r.a.createElement(A,{text:"Built with \u2665 in the beautiful city of Toronto, Canada. \xa9 2019 by Chaoyue Zhao. All rights reserved."}))}}]),t}(n.Component));h.b.add(p.d,p.c,p.b,p.a);var _=O;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.9f393a23.chunk.js.map