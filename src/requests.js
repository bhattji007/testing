const Base="http://127.0.0.1:8000";

const requests={
    park_in:`${Base}/aps/checkin/`,
    park_out:`${Base}/aps/checkout/`,
    sign_in:`${Base}/register/`,
    log_in:`${Base}/login/`
}
 export default requests;