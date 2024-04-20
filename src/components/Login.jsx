import { useContext, useEffect, useState } from "react";
import { loginApi } from "../services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";



const Login = () => {
    const navigate = useNavigate();
    const {loginContext} = useContext(UserContext);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   useEffect(() => {
    let token = localStorage.getItem('token');
    if(token){

        navigate('/');
    }
   },[])

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Email/ password is required!");
            return;
        }


        let res = await loginApi(email, password);
        console.log(res);
        if (res && res.token) {
            loginContext(email, res.token);
            navigate("/")
        } else {
            if (res && res.status === 400) {
                toast.error('co loi');
            }
        }
        console.log('>> check login: ', res.token)
        console.log('>> check login: ', res.status)
    }


    return (<div className="login-page">

        <div className="login-box grid" >
            <div className="content">
                <h1 className="login-title">Đăng nhập</h1>
                <p className="login-note">Đăng ký thành viên và nhận ngay ưu đãi 10% cho đơn hàng đầu tiên</p>
            </div>

            <div className="form">
                <div className="input-group input-group-email">
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                <div className="input-group input-group-password">
                    <label htmlFor="">Mật khẩu</label>
                    <input type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />


                </div>

                <button
                    className="login-button"
                    onClick={() => { handleLogin() }}
                    disabled={email && password ? false : true}
                >Đăng nhập</button>

                <div class="action">
                    <button>Đăng kí</button>

                    <button>Quên mật khẩu</button>
                </div>
            </div>

            
        </div>
    </div>);
}

export default Login;