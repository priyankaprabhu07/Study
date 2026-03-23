##### **Google billing - March -**  



* **March 1 to 11** - **₹234** total → Current total billing.
* **1–8 March:** very small usage.
* **9–11 March:** cost increased suddenly



**Possible reasons:**



\* API traffic increased

\* Images or files are being served

\* Someone hitting API frequently

\* Admin panel refreshing many times

\* Large responses



**Service	                 Cost**

Cloud Armor Policy	₹139.62

Cloud Armor Rule	₹55.85

Compute Engine Storage	₹26.81

Snapshot Storage	₹12.07



So Cloud Armor is costing more.



* **Cloud Armor is a security firewall for Google Cloud.**
* **Cloud Armor charges are calculated continuously (hourly) and appear in billing daily.**

**--------------------------------------------------------------------------------------------------**



* **March 12 to 15** - Total spent: **₹1,011.34.**



**Service	                  Cost**

Directions API (India)	₹466.25

Cloud Armor Policy	₹7.76

Cloud Armor Rule	₹3.43

Storage PD	        ₹1.49

Snapshot	        ₹0.69



\*Your app called Directions API for every order

\*A loop or bug repeatedly called the API

\* Multiple drivers/users opened the map frequently

\*Your backend calculates routes many times

\* A testing script triggered many requests



Even refreshing map repeatedly can trigger calls.(₹466.25 → Directions API)

\-------------------------------------------------------------------------------------------------

* ##### &#x20;**Reduce Directions API Cost**

##### 

**1 Cache routes**



If the same route is requested again, store it instead of calling the API again.



**2 Use Distance Matrix API**



Sometimes cheaper for multiple distance calculations.



**3 Call Directions API only when needed**



For example:



Instead of calculating route every refresh, calculate only when:



\*order is accepted



\*driver starts delivery



**4 Limit repeated calls**



Example backend logic:



if (routeAlreadyCalculated) {

&#x20;  return cachedRoute

}



\----------------------------------------------------------------------------------------------

* **March 16 to 19** - 



**Date	        Approx Cost	Main Reason**

March 16	₹500–₹550	Directions API

March 17	₹250–₹300	Directions API

March 18	₹750–₹800 	Directions API (peak)

March 19	₹650–₹700	Directions API



* \~2000 Directions API calls in ONE day - March 18.
* March 16 - RS 483.67
* March 17 - Rs 206.70
* March 18 - Rs 787.24
* March 19 - Rs 687.50

&#x20;

**So total from March 1 to 19 is ₹3,338.62**



















