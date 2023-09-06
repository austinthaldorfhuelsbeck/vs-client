import React, { Dispatch, SetStateAction } from "react";
import { UserProfile } from "src/models/user-profile";
import { Company } from "src/models/company";
import { CompanyTab } from "src/components/tabs/company-tab";

interface Props {
  userProfile: UserProfile | null;
  company: Company | null;
  setCompany: Dispatch<SetStateAction<Company | null>>;
}

export const CompaniesSelector: React.FC<Props> = ({
  userProfile,
  company,
  setCompany
}) => {
  return (
    <div className="nav-bar__tabs">
      {userProfile && company && setCompany ? 
        userProfile.companies.map((company: Company) => (
          <CompanyTab company={company} setCompany={setCompany} />
        )) :
        <span>Loading...</span>}
    </div>
  );
};