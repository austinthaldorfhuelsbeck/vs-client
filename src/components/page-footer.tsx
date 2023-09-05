import React from "react";
import { Auth0Resource } from "../models/auth0-resource";
import { PageFooterHyperlink } from "./page-footer-hyperlink";

export const PageFooter = () => {
  const resourceList: Auth0Resource[] = [
    {
      path: "/terms",
      label: "Terms of Service",
    },
    {
      path: "/privacy",
      label: "Privacy Policy",
    }
  ];

  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>Copyright © 2023 Vowsuite, Inc. All Rights Reserved.</span>
            </p>
          </div>
          <div className="page-footer-info__resource-list">
            {resourceList.map((resource) => (
              <div
                key={resource.path}
                className="page-footer-info__resource-list-item"
              >
                <PageFooterHyperlink path={resource.path}>
                  <>{resource.label}</>
                </PageFooterHyperlink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
