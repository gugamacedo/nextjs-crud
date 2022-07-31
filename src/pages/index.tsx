import Layout from '../components/Layout'
import Table from '../components/Table'
import Button from '../components/Button'
import Form from '../components/Form'
import useClients from '../hooks/useClients'

const Home = () => {
  const {
    client,
    clients,
    newClient,
    saveClient,
    editedClient,
    deletedClient,
    isTable,
    showTable,
  } = useClients()

  return (
    <div
      className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-purple-500 to-purple-900
      `}
    >
      <Layout title="Cadastro Simples">
        {isTable && (
          <>
            <div className="flex justify-end">
              <Button color="green" handleAddButton={newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table clients={clients} editedClient={editedClient} deletedClient={deletedClient} />
          </>
        )}
        {!isTable && <Form client={client} cancel={showTable} handleClient={saveClient} />}
      </Layout>
    </div>
  )
}

export default Home
