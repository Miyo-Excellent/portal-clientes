"use client";
import { useSelector } from "react-redux";
import { ReportNumberForm } from "@components/reportNumberForm";
import { selectReport } from "@redux/slices/report.slice";
import { Welcome } from "@components/welcome";
import Secures from "@components/secure";
import FinancialStatements from "@components/financialStatements";
import CorporateGovernance from "@components/corporateGovernance";
import ContactUs from "@components/contactUs";
import Locations from "@components/locations";
import { Banner } from "@components/banner";
import { WhoWeAre } from "@components/whoWeAre";
import { Career } from "@components/career";

export interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ searchParams }: HomeProps) {
  const { isFetched, isLoading, user } = useSelector(selectReport);

  return (
    <main className="flex-1 flex flex-col items-center justify-start gap-8">
      {isFetched && <Welcome />}
      {!isFetched && (
        <>
          <Banner />

          <ReportNumberForm />

          <div className="flex flex-row flex-nowrap justify-center items-stretch gap-14">
            <div className="flex-1" />

            <WhoWeAre />

            <Career />

            <div className="flex-1" />
          </div>

          <Secures />

          <FinancialStatements />

          <CorporateGovernance />

          <ContactUs />

          <Locations />
        </>
      )}
    </main>
  );
}
