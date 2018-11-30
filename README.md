
# Cola Booking | Pepsi version | Consensys

## How to run the project

In order to run the project you must first of all clone the project

```
git clone https://github.com/louiskleverman/Cola-booking-Pepsi-version.git
```

Once cloned you have to install the packages with the following :

```
npm install
npm install -g webpack webpack-cli
```

Next you have to launch ganache in order to deploy your contracts to a private ethereum network

Once installed and ganache running you have to compile the contracts end migrate them

```
truffle compile
truffle migrate --reset
```

Then to run the app you simply need to run the following 

```
npm run start
```
## How to link Coke app and Pepsi app

Both apps are using the same contract so you are able to see some of the actions of the other app.

One way to make sure you are linked to the same smart contract, is to have the same Booking.json file at /build/contracts.

## Technologies used

The technologies and langiuages used for this project are the following :
*   React
*   Javascript
*   HTML5/CSS3
*   Solidity
*   Truffle
*   Web3/truffle contract
*   Ganache

## Getting Started

### Requirements for the project 

To install this project you will need the following

#### Node

#### Truffle

Truffle is a **smartcontract** to **webclient** framework that helps deploying apps using smart contracts very easily 

```
npm install -g truffle
```

#### Ganache

Ganache is a private blockchain that is being used to deploy the app for testing
there are 2 Ganache clients you can use :

##### Ganache CLI

The ganache command line

```
npm run install -g ganache-cli
```
##### Ganache UX client

The ganache software that can be installed from ganaches main website

#### IPFS

Not required since Infura is doing all the hosting


