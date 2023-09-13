type Props = {
    companies: Company[]
}

const RenderCompany = (props: Props) => {
    const { companies } = props
    return (
        <div>
          {companies.map((company: Company, index:number) => (
            <div key={index}>
              {company.logoUrl && <img src={company.logoUrl} alt={company.name} />}
              {company.name && <h2>{company.name}</h2>}
              {company.description && <p>{company.description}</p>}
              {company.location && <p>Location: {company.location}</p>}
              {company.website && (
                <p>
                  Website: <a href={company.website}>{company.website}</a>
                </p>
              )}
            </div>
          ))}
        </div>
      );
  };

  export default RenderCompany