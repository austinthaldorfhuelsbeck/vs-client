import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import React, { Dispatch, SetStateAction } from "react";
import { Company } from "src/models/company";
import { NavLink } from "react-router-dom";

interface Props {
  company: Company;
  selectedCompany: Company | null;
  setSelectedCompany: Dispatch<SetStateAction<Company | null>>;
}

export const CompaniesSelectorListItem: React.FC<Props> = ({
  company,
  selectedCompany,
  setSelectedCompany
}) => {
  return (
    <li
      className={
        (company.company_id === selectedCompany?.company_id) ?
        "nav-bar__tab nav-bar__tab--active" :
        "nav-bar__tab"
      }
      onClick={() => setSelectedCompany(company)}
    >
      <span>{company.company_name}</span>
      &nbsp;&nbsp;
      <NavLink to={`/studio/company/${company.company_id}`}>
        <FontAwesomeIcon icon={faGear} />
      </NavLink>
    </li>
  )
}