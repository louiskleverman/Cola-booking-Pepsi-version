pragma solidity ^0.4.24;

contract booking{
    //list of coca cola employees
    address[] coke;
    //list of pepsi employees
    address[] pepsi;
    uint nbCokeEmployees;
    uint nbPepsiEmployees;
    enum Company{EMPTY,COKE,PEPSI}
    //from 6am to 20pm
    uint constant NBHOURS = 14;
    //nb rooms
    uint constant NBROOMS = 20;

    
    
    //Each reservation's int = time at which the person reserved.
    uint[14][20] public reservationsCompany;
    address[14][20] public reservationsReserver;
    
    //temporary
    /*
    constructor() public{
        coke.push(msg.sender);
        pepsi.push(msg.sender);
        // Might be better to set at 1 from contract
        nbCokeEmployees++;
        nbPepsiEmployees++;
    }*/
    
    
    constructor(address _coke,address _pepsi) public{
        coke.push(_coke);
        pepsi.push(_pepsi);
        // Might be better to set at 1 from contract
        nbCokeEmployees++;
        nbPepsiEmployees++;
    }
    
    /** @dev Modifier to check if the address is in cokeEmployee.
      * @param _employee The address of the employee.
      */
    modifier isCokeEmployee(address _employee){
        bool isEmployeeBool = false;
        for(uint i = 0 ; i < coke.length ; i++){
            if(coke[i] == _employee)
                isEmployeeBool = true;
        }
        require(isEmployeeBool);
        _;
    }    
    
    /** @dev Modifier to check if the address is in pepsiEmployee.
      * @param _employee The address of the employee.
      */
    modifier isPepsiEmployee(address _employee){
        bool isEmployeeBool = false;
        for(uint i = 0 ; i < pepsi.length ; i++){
            if(pepsi[i] == _employee)
                isEmployeeBool = true;
        }
        require(isEmployeeBool);
        _;
    }
    
    /** @dev Checks the company's number of hours reserved compared to the quota
      * @param _company 0,1 or 2. The company in question.
      * @param _hour The hour to check the quota.
      */
    modifier reserveQuota(uint _company,uint8 _hour){
        uint8 count = getCompanyReservationCount(_company,_hour);
        require(count < 10);
        _;
    }
    
     /** @dev Returns the company's reservation count
      * @param _company 0,1 or 2. The company in question.
      * @param _hour The hour to check the quota.
      * @return uint8 The amount of reservations at _hour
      */
    function getCompanyReservationCount(uint _company,uint _hour) public view returns(uint8){
        uint8 count = 0;
        for(uint8 i = 0 ; i < 20 ; i++){
            if(_company == reservationsCompany[i][_hour])
                count++;
        }
        return count;
    }
    
     /** @dev Adds a coke employee to cokeEmployee
      * @param _newEmployee address of the new employee
      */
    function addCokeEmployee(address _newEmployee) public isCokeEmployee(msg.sender){
        //Checking if duplicate
        bool isEmployeeBool = false;
        for(uint i = 0 ; i < coke.length ; i++){
            if(coke[i] == _newEmployee)
                isEmployeeBool = true;
        }
        require(!isEmployeeBool);
        nbCokeEmployees++;
        coke.push(_newEmployee);
    }     
    
    /** @dev Adds a pepsi employee to cokeEmployee
      * @param _newEmployee address of the new employee
      */
    function addPepsiEmployee(address _newEmployee) public isPepsiEmployee(msg.sender){
        //Checking if duplicate
        bool isEmployeeBool = false;
        for(uint i = 0 ; i < pepsi.length ; i++){
            if(pepsi[i] == _newEmployee)
                isEmployeeBool = true;
        }
        require(!isEmployeeBool);
        nbPepsiEmployees++;
        pepsi.push(_newEmployee);
    } 
    
    /** @dev Removes a coke employee from cokeEmployees
      * @param _employee address of the employee getting removed
      */
    // not good yet, need to see if it's better to remove employee and then reorganize the array (more costly in gas).
    function removeCokeEmployee(address _employee) public isCokeEmployee(msg.sender){
        //To not remove self from list
        require(_employee != msg.sender);
        require(nbCokeEmployees>1);
        for(uint i = 0 ; i < coke.length ; i++){
            if(coke[i] == _employee)
                delete coke[i];
        }
        nbCokeEmployees--;
    }     
    
    /** @dev Removes a pepsi employee from cokeEmployees
      * @param _employee address of the employee getting removed
      */
    function removePepsiEmployee(address _employee) public isPepsiEmployee(msg.sender){
        //to not remove self from list
        require(_employee != msg.sender);
        //To make sure at least one person is able to add/remove
        require(nbPepsiEmployees>1);
        for(uint i = 0 ; i < pepsi.length ; i++){
            if(pepsi[i] == _employee)
                delete pepsi[i];
        }
        nbPepsiEmployees--;
    } 
    
    /** @dev Reserves a room at a certain time as coke.
      * @param _room the room getting reserved
      * @param _hour the hour at which the room is getting reserved
      */
    function reserveCoke(uint8 _room, uint8 _hour) public reserveQuota(1,_hour) isCokeEmployee(msg.sender){
        require(reservationsCompany[_room][_hour] == 0);
        reservationsCompany[_room][_hour] = 1;
        reservationsReserver[_room][_hour] = msg.sender;
    }
    
    /** @dev Reserves a room at a certain time as pepsi.
      * @param _room the room getting reserved
      * @param _hour the hour at which the room is getting reserved
      */
    function reservePepsi(uint8 _room, uint8 _hour) public reserveQuota(2,_hour) isPepsiEmployee(msg.sender){
        require(reservationsCompany[_room][_hour] == 0);
        reservationsCompany[_room][_hour] = 2;
        reservationsReserver[_room][_hour] = msg.sender;
    }
    
    /** @dev Cancel a reservation.
      * @param _room the room getting canceled
      * @param _hour the hour at which the room is getting canceled
      */
    function cancelReservation(uint8 _room,uint8 _hour) public {
        require(msg.sender ==  reservationsReserver[_room][_hour]);
        reservationsCompany[_room][_hour] = 0;
        reservationsReserver[_room][_hour] = 0x0;
    }

    /** @dev Returns the reservations (Company reserving and the address reserving)
      * @return uint[14][20] the company reserving
      * @return address[14][20] the address reserving
      */
    function getBookings()public view returns(uint[14][20],address[14][20]){
        return (reservationsCompany,reservationsReserver);
    }
    
    /** @dev Getter : gets all coke employees
      * @return address[] array of all coke employees
      */
    function getCokeEmployees() public view returns(address[]){
        address[] memory cokeEmployees = new address[](coke.length);
        for(uint i = 0 ; i < coke.length ; i++){
            cokeEmployees[i] = coke[i];
        }
        return cokeEmployees;
    }
    
    
    /** @dev Getter : gets all coke employees
      * @return address[] array of all coke employees
      */
    function getPepsiEmployees() public view returns(address[]){
        address[] memory pepsiEmployees = new address[](pepsi.length);
        for(uint i = 0 ; i < pepsi.length ; i++){
            pepsiEmployees[i] = pepsi[i];
        }
        return pepsiEmployees;
    }
    
    
}