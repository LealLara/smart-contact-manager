function Profile(){

    return(

        <div
            style={{
                minHeight:"100vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}
        >

            <div
                style={{
                    background:"rgba(17,24,39,0.7)",
                    backdropFilter:"blur(12px)",
                    padding:"40px",
                    borderRadius:"24px",
                    width:"400px",
                    boxShadow:"0 0 20px rgba(37,99,235,0.2)"
                }}
            >

                <h1
                    style={{
                        marginBottom:"20px"
                    }}
                >
                    Meu Perfil
                </h1>

                <p>Usuário: Lara</p>

                <p>Email: lara@email.com</p>

            </div>

        </div>
    );
}

export default Profile;