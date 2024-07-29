/**
 * install jsonwebtoken
 * jwt.sign (payload,secret,{expiresIn:})
 * send to client
 * */

/**
 * how to store token in the client side
 * 1. memory --> ok type
 * 2. local storage --> ok type
 * 3. cookies : http only
 *
 * */

/**
 * 1. set cookies with http only. for development secure  : false,
 * 
 * 2. cors
 * app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

 * 
 * 3. client side axios setting
 * in axios set withCredentail: true
 */

/**
 * 1. to send cookies from client side make sure you added withCredential: true for the api call using axios
 * 2 . use cookie parser as middleware
 *
 */

//gpt --> why should i put jwt token in http only? i am using express ,how can i set in to the cookie and send
