import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layouts/admin-layout";
import RootLayout from "./components/layouts/root-layout";
import AboutPage from "./components/pages/about/about-page";
import AdminAnalyticsPage from "./components/pages/admin/analytics";
import AdminBlogsPage from "./components/pages/admin/blogs";
import AdminContactsPage from "./components/pages/admin/contacts";
import AdminDashboard from "./components/pages/admin/dashboard";
import AdminDemosPage from "./components/pages/admin/demos";
import AdminJobsPage from "./components/pages/admin/jobs";
import AdminLoginPage from "./components/pages/admin/login";
import AdminSettingsPage from "./components/pages/admin/settings";
import CareersPage from "./components/pages/company/careers";
import ContactPage from "./components/pages/company/contact";
import LeadershipPage from "./components/pages/company/leadership";
import GetDemoPage from "./components/pages/get-demo";
import LandingPage from "./components/pages/landing/landing-page";
import NotFoundPage from "./components/pages/not-found";
import AbanoahPage from "./components/pages/products/abanoah";
import AxionTrustPage from "./components/pages/products/axiontrust";
import Board3Page from "./components/pages/products/board3";
import EdgeRpPage from "./components/pages/products/edgerp";
import ProductsIndex from "./components/pages/products/index";
import QuorixPage from "./components/pages/products/quorix";
import SentryOneIdPage from "./components/pages/products/sentryone-id";
import SevitaCareOnePage from "./components/pages/products/sevitacareone";
import ShadowRealmPage from "./components/pages/products/shadowrealm";
import DernPage from "./components/pages/products/dern";
import AnalystReportsPage from "./components/pages/resources/analyst-reports";
import AwardsPage from "./components/pages/resources/awards";
import BlogPage from "./components/pages/resources/blog";
import CaseStudiesPage from "./components/pages/resources/case-studies";
import DocsPage from "./components/pages/resources/docs";
import CloudSecurityPage from "./components/pages/solutions/cloud-security";
import ComplianceAutomationPage from "./components/pages/solutions/compliance-automation";
import FinancialServicesPage from "./components/pages/solutions/financial-services";
import HealthcarePage from "./components/pages/solutions/healthcare";
import IdentityGovernancePage from "./components/pages/solutions/identity-governance";
import SolutionsIndex from "./components/pages/solutions/index";
import InfrastructureAutomationPage from "./components/pages/solutions/infrastructure-automation";
import ManufacturingPage from "./components/pages/solutions/manufacturing";
import PrivilegedAccessPage from "./components/pages/solutions/privileged-access";
import SecureErpPage from "./components/pages/solutions/secure-erp";
import TechnologyPage from "./components/pages/solutions/technology";

interface RouteType {
  path: string;
  Layout?: any;
  Component: any;
}

const routes: RouteType[] = [
  {
    path: "/",
    Component: LandingPage,
    Layout: RootLayout,
  },
  {
    path: "/about",
    Component: AboutPage,
    Layout: RootLayout,
  },
  {
    path: "/products",
    Component: ProductsIndex,
    Layout: RootLayout,
  },
  {
    path: "/solutions",
    Component: SolutionsIndex,
    Layout: RootLayout,
  },
  { path: "/products/quorix", Component: QuorixPage, Layout: RootLayout },
  {
    path: "/products/axiontrust",
    Component: AxionTrustPage,
    Layout: RootLayout,
  },
  { path: "/products/dern", Component: DernPage, Layout: RootLayout },
  { path: "/products/board3", Component: Board3Page, Layout: RootLayout },
  {
    path: "/products/sentryone-id",
    Component: SentryOneIdPage,
    Layout: RootLayout,
  },
  { path: "/products/edgerp", Component: EdgeRpPage, Layout: RootLayout },
  { path: "/products/abanoah", Component: AbanoahPage, Layout: RootLayout },
  {
    path: "/products/sevitacareone",
    Component: SevitaCareOnePage,
    Layout: RootLayout,
  },
  {
    path: "/products/shadowrealm",
    Component: ShadowRealmPage,
    Layout: RootLayout,
  },
  {
    path: "/solutions/cloud-security",
    Component: CloudSecurityPage,
    Layout: RootLayout,
  },
  {
    path: "/solutions/compliance-automation",
    Component: ComplianceAutomationPage,
    Layout: RootLayout,
  },
  {
    path: "/solutions/privileged-access",
    Component: PrivilegedAccessPage,
    Layout: RootLayout,
  },
  {
    path: "/solutions/identity-governance",
    Component: IdentityGovernancePage,
    Layout: RootLayout,
  },
  {
    path: "/solutions/infrastructure-automation",
    Component: InfrastructureAutomationPage,
    Layout: RootLayout,
  },
  {
    path: "/solutions/secure-erp",
    Component: SecureErpPage,
    Layout: RootLayout,
  },
  {
    path: "/solutions/financial-services",
    Component: FinancialServicesPage,
    Layout: RootLayout,
  },
  {
    path: "/solutions/healthcare",
    Component: HealthcarePage,
    Layout: RootLayout,
  },
  {
    path: "/solutions/manufacturing",
    Component: ManufacturingPage,
    Layout: RootLayout,
  },
  {
    path: "/solutions/technology",
    Component: TechnologyPage,
    Layout: RootLayout,
  },
  { path: "/resources/docs", Component: DocsPage, Layout: RootLayout },
  {
    path: "/resources/analyst-reports",
    Component: AnalystReportsPage,
    Layout: RootLayout,
  },
  {
    path: "/resources/case-studies",
    Component: CaseStudiesPage,
    Layout: RootLayout,
  },
  { path: "/resources/awards", Component: AwardsPage, Layout: RootLayout },
  { path: "/resources/blog", Component: BlogPage, Layout: RootLayout },
  { path: "/company/contact", Component: ContactPage, Layout: RootLayout },
  { path: "/company/careers", Component: CareersPage, Layout: RootLayout },
  {
    path: "/company/leadership",
    Component: LeadershipPage,
    Layout: RootLayout,
  },
  { path: "/get-demo", Component: GetDemoPage, Layout: RootLayout },
  { path: "/admin/login", Component: AdminLoginPage },
  { path: "/admin/dashboard", Component: AdminDashboard, Layout: AdminLayout },
  {
    path: "/admin/analytics",
    Component: AdminAnalyticsPage,
    Layout: AdminLayout,
  },
  { path: "/admin/blogs", Component: AdminBlogsPage, Layout: AdminLayout },
  { path: "/admin/jobs", Component: AdminJobsPage, Layout: AdminLayout },
  {
    path: "/admin/contacts",
    Component: AdminContactsPage,
    Layout: AdminLayout,
  },
  { path: "/admin/demos", Component: AdminDemosPage, Layout: AdminLayout },
  {
    path: "/admin/settings",
    Component: AdminSettingsPage,
    Layout: AdminLayout,
  },
  { path: "*", Component: NotFoundPage },
];

const App = () => {
  return (
    <Routes>
      {routes.map(({ path, Layout, Component }, index) => {
        return (
          <Route
            key={index}
            path={path}
            element={
              Layout ? (
                <Layout>
                  <Component />
                </Layout>
              ) : (
                <Component />
              )
            }
          />
        );
      })}
    </Routes>
  );
};

export default App;
