import { lazy, memo, Suspense, useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import LandingPage from "../Pages/LandingPage/LandingPage";
import VoucherManagement from "../Pages/VoucherManagement/VoucherManagement";

import VoucherCampaignManagement from "../Pages/VoucherCampaignManagement/VoucherCampaignManagement";
import CombackCustomers from "../Pages/CombackCustomers/CombackCustomers";
import ProductManagement from "../Pages/ProductManagement/ProductManagement";
import MoneyManagement from "../Pages/MoneyManagement/MoneyManagement";
import MorePage from "../Pages/MorePage/MorePage";
import InformPage from "../Pages/InformPage/InformPage";

const PageLayout = lazy(() => import("../Layouts/PageLayout"));

function RouterComponent() {
  const location = useLocation();

  const routes = [
    {
      path: "/",
      element: (
        <Suspense fallback={<p className="suspense_loading">Loading....</p>}>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={{ enter: 300, exit: 300 }}
              classNames="fade"
            >
              <PageLayout>
                <LandingPage />
              </PageLayout>
            </CSSTransition>
          </TransitionGroup>
        </Suspense>
      ),
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "/VoucherManagerment", element: <VoucherManagement /> },
        {
          path: "/VoucherCampaignManagement",
          element: <VoucherCampaignManagement />,
        },
        {
          path: "/CombackCustomers",
          element: <CombackCustomers />,
        },
        {
          path: "/InformPage",
          element: <InformPage />,
        },
        {
          path: "/ProductManagement",
          element: <ProductManagement />,
        },
        {
          path: "/MoneyManagement",
          element: <MoneyManagement />,
        },
        {
          path: "/MorePage",
          element: <MorePage />,
        },
      ],
    },
  ];
  useEffect(() => {}, []);

  return useRoutes(routes);
}

export default memo(RouterComponent);
