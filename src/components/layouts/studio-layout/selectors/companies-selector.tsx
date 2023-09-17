import React, { Dispatch, SetStateAction } from "react";
import { UserProfile } from "src/models/user-profile";
import { Company } from "src/models/company";
import { CompaniesSelectorListItem } from "src/components/layouts/studio-layout/selectors/companies-selector-li";

interface Props {
  userProfile: UserProfile | null;
  selectedCompany: Company | null;
  setSelectedCompany: Dispatch<SetStateAction<Company | null>>;
}

export const CompaniesSelector: React.FC<Props> = ({
  userProfile,
  selectedCompany,
  setSelectedCompany
}) => {
  return (
    <ul className="nav-bar__tabs">
      {selectedCompany && setSelectedCompany ? 
        userProfile?.companies.map((company: Company) => (
          <CompaniesSelectorListItem
            key={company.company_id}
            company={company}
            selectedCompany={selectedCompany}
            setSelectedCompany={setSelectedCompany}
          />
        )) :
        <span>Loading...</span>}
    </ul>
  );
};