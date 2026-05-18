import ContactList from "../components/ContactList";


function Dashboard() {

    const contacts = [

        {
            id: 1,
            name: "Lara Veronica",
            email: "lara@email.com",
            phone: "(41) 99999-9999"
        },

        {
            id: 2,
            name: "Contato Teste",
            email: "teste@email.com",
            phone: "(11) 98888-7777"
        }
    ];

    return (

        <div
            style={{
                padding: "40px"
            }}
        >

            <h1
                style={{
                    marginBottom: "30px",
                    fontSize: "42px"
                }}
            >
                Seus Contatos
            </h1>

            <ContactList contacts={contacts} />

        </div>
    );
}

export default Dashboard;