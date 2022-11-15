// 7. Sukurti metodą 'renderElement', kuris sukurią html elementą, jame atvaizduoja automobilio informaciją (modelį, brandą, variklio tipą, kilometražą, spalvą, bazinę kainą) ir šį elementą išveda į ekraną.
// 7.1. Pridėti property 'image', kuris turėtų būti nuotrauka ir šią nuotrauką, taip pat, pridėti į formuluojamą elementą.

class Company {

    constructor ( companyName, opened, code, employees, ceo, nvo, workingLocation, activityAreas, subsidiary, phone, email, country, city, street, apartment){
        this.companyName = companyName;
        this.opened = opened;
        this.code = code;
        this.employees = employees;
        this.ceo = ceo;
        this.nvo = nvo;
        this.workingLocation = workingLocation;
        this.activityAreas = activityAreas;
        this.phone = phone;
        this.email = email;
        this.country = country;
        this.city = city;
        this.street = street;
        this.apartment = apartment;
        this.subsidiary = subsidiary;

        this.address = {'country': this.country,
                        'city': this.city,
                        'street': this.street,
                        'apartment': this.apartment
                         };

        this.contacts = {'phone': this.phone,
                         'email': this.email,
                         'address' : this.address
                        };
    }

    getAddressString(){
        return `${this.street} ${this.appartment}, ${this.city}, ${this.country}`;
    }

    setNvo(param){

        if(param) {
            this.nvo = param;
        } else {
            this.nvo = !(this.nvo);
        }

      return this.nvo;
    }

    getActivityAreasString(){
        return this.activityAreas.toString();
    }

    getWorkingLocationString(){
        return this.workingLocation.toString();
    }

    addActivityArea(data){
        return this.activityAreas.push(data);
    }

    addWorkingLocation(data){
        return this.workingLocation.push(data);
    }
    
    deleteWorkingLocation(data){
        const index = this.workingLocation.indexOf(data);

        if (index > -1) { 
            this.workingLocation.splice(index, 1);
          }

          return this.workingLocation;
    }

    deleteActivityArea(data){
        const index = this.activityAreas.indexOf(data);

        if (index > -1) { 
            this.activityAreas.splice(index, 1);
          }

          return this.activityAreas;
    }


}

let company = new Company('companyName', 'opened', 'code', 'employees', 'ceo', 'nvo', ['workingLocation1', 'workingLocation2'] ['activityArea1', 'activityArea2'], 'subsidiary', 'phone', 'email', 'country', 'city', 'street', 'apartment');
       
console.log(company.getActivityAreasString());