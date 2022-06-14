# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Running the application 
-open file in vscode
-open terminal from vscode
-ng serve --port 5000
-open browser localhost:5000

## The API should look something like this
```
{
	"utc_offset_seconds":3600,
	"daily_units":
	{		
		"windspeed_10m_max":"km\/h",
		"temperature_2m_min":"°C",
		"time":"iso8601",
		"temperature_2m_max":"°C",
		"weathercode":"wmo code"
	},
	"generationtime_ms":0.510096549987793,
	"latitude":46.56,
	"longitude":15.619999,
	"elevation":279,
	"daily":
	{
		"weathercode":[3,3,80,3,3,0,2],
		"temperature_2m_min":[13.2,12.4,15.3,16.3,14.9,11.2,12.8],
		"time":["2022-06-14","2022-06-15","2022-06-16","2022-06-17","2022-06-18","2022-06-19","2022-06-20"],
		"windspeed_10m_max":[16.1,17.8,9.4,9.2,7.2,18,9.8],
		"temperature_2m_max":[23.7,27.1,28.2,23.8,25.6,27.2,30.2]}
	}

```
