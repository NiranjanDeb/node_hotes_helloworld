import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import Person from "./Models/Person.js";

// passport.js used for local authentication
passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, async (USERNAME, PASSWORD, done) => {
  try {
    const user = await Person.findOne({ username: USERNAME });
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    const isPasswordMatch =await user.comparePassword(PASSWORD);
    if(isPasswordMatch){
      return done(null, user);
    }
    if (!isPasswordMatch) {
      return done(null, false, { message: 'Incorrect password.' });
    }
  } catch (error) {
    console.error('Error during authentication:', error);
    return done(error);
  }
}
));



export default passport
