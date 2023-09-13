import RenderCompany from "./components/renderCompany"

const companies: Company[] = [
  {
    name: 'Company A',
    description: 'Description of Company A',
    location: 'City A',
    website: 'https://www.companya.com',
    logoUrl: 'https://www.companya.com/logo.png',
  },
  {
    name: 'Company B',
    location: 'City B',
    website: 'https://www.companyb.com',
  },
  {
    name: 'Company C',
    description: 'Description of Company C',
    website: 'https://www.companyc.com',
  },
];

function App() {

  return (
    <>
      <RenderCompany companies={companies} />
    </>
  )
}

export default App
