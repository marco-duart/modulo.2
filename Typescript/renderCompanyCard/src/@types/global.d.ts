type Company = {
  name?: string;
  description?: string;
  location?: string;
  website?: string;
  logoUrl?: string;
};

type Props = {
  companies: Company[]
}
