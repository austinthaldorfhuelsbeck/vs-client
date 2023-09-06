import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import React, { Dispatch, SetStateAction } from "react";
import { Company } from "src/models/company";
import { NavLink } from "react-router-dom";

interface Props {
  company: Company;
  setCompany: Dispatch<SetStateAction<Company | null>>;
}

export const CompanyTab: React.FC<Props> = ({
  company,
  setCompany
}) => {
  return (
    <span
      className="nav-bar__tab"
      onClick={() => setCompany(company)}
    >
      <span>{company.company_name}</span>
      &nbsp;&nbsp;
      <NavLink to={`/studio/company/${company.company_id}/settings`}>
        <FontAwesomeIcon icon={faGear} />
      </NavLink>
    </span>
  )
}