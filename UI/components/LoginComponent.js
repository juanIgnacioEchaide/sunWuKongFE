import withLogin from "../../apollo/queryHOCs/withLogin"
import { INPUT_EMAIL, INPUT_PASSWORD } from '../../utils/constants'

const LoginLayout = ({loggedIn,handleChange,handleSignIn }) => {
    return (<div>{
      !loggedIn
        ?
        <>
          <input
            name="email"
            type="text"
            placeholder="E-mail"
            onChange={event => handleChange(event, INPUT_EMAIL)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={event => handleChange(event, INPUT_PASSWORD)}
          />
          <button onClick={handleSignIn}>LOGIN</button>
        </>
        : <div>ESTAS LOGUEADO</div>}
      </div>)
    }
  
const LoginComponent = withLogin(LoginLayout);
    
export default LoginComponent
  