import './styles.scss'

const Home = () => {
    return (
        <div className='container'>
            <div className='login'>
                <form className='login-form'>

                    <div class="input-wrapper">
                        <input type="email" name="email" required />
                        <label className='label'>Email</label>
                        <span className="line"></span>
                    </div>

                    <div class="input-wrapper">
                        <input type="password" name="password" required />
                        <label className='label'>Password</label>
                        <span className="line"></span>
                    </div>
                    <div className='form-action'>
                        <button type='submit' className='btn btn-blue'>
                            Sign In
                        </button>
                    </div>
                </form>  

            </div>
        </div>
    )
}

export default Home