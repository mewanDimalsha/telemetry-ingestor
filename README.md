I started the project from the beginning and successfully connected it with MongoDB Atlas using the URI:

MONGODB_URI="mongodb+srv://admin1:admin1@mewancluster0.yvhcdwh.mongodb.net/?retryWrites=true&w=majority&appName=mewancluster0"

While setting up the schema for telemetry data, I faced this TypeScript/NestJS error:

Unable to resolve signature of property decorator when called as an expression.
Argument of type 'undefined' is not assignable to parameter of type 'Object'.ts(1240)

I checked the NestJS + Mongoose documentation and also tried AI-assisted debugging to log the Mongo connection and resolve the schema issue, but I couldn’t fully fix it.

->type npm run start:dev to run the code and use http://localhost:3000 in postman to see the output
