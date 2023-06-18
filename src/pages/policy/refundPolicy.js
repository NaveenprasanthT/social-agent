import HeroBanner from "@/Components/Policy/HeroBanner";
import PolicyContent from "@/Components/Policy/policyContent";

const termsConditions = () => {

    const bannerContent = {
        title:`Refund Policy`,
        desc:`Lorem ipsum dolor sit amet consectetur. Consectetur feugiat bibendum mattis sed vel maecenas gravida faucibus.`,
    }

    const policyDesc = [
        {
            title:`General`,
            content:<>
            a. This website with the URL of https://socialagent.in ("Website/Site") is operated by Bricstal Digital Private Limited ("We/Our/Us").
            <br/>b. We are committed to providing Our customers with the highest quality Services. However, on rare occasions, Services may be found to be deficient. In such cases, We offer refund in accordance with this Refund Policy ("Policy").
            <br/>c. You are advised to read Our Terms and Conditions along with this Policy at the following webpage: www.socialagent.in/terms-and-conditions.
            <br/>d. By using this website, You agree to be bound by the terms contained in this Policy without modification. If You do not agree to the terms contained in this Policy, You are advised not to transact on this website.
            <br/>e. We offer a 14 days refund Policy for the eligible Services.
            <br/>f. Please read this Policy before availing service on this Website, so that You understand Your rights as well as what You can expect from Us if You are not happy with Your purchase.
            </>
        },
        {
            title:`Definitions`,
            content:<>
            a. "Business Days" - means a day that is not a Saturday, Sunday, public holiday, or bank holiday in India or in the state where our office is located.
            <br/>b. "Customer" - means a person who avails services for consideration and does not include commercial purchases.
            <br/>c. "Date of Transaction" - means the date of invoice of the service, which includes the date of renewal processed in accordance with the terms and conditions of the applicable service agreement.
            <br/>d. "Website" - means this website with the URL: https://socialagent.in.
            </>
        },
        {
            title:`Refund Rules`,
            content:<>
            a. Every effort is made so as to service the orders placed, as per the specifications and timelines mentioned with respect to a Services. If due to any unforeseen circumstances or limitations from Our side, the service is not provided then such order stands cancelled and the amount paid by You is refunded.
            <br/>b. We will not process a refund if You have placed the order for the wrong service.
            <br/>c. When you make a qualifying refund request. We may refund the full amount, less any additional cost incurred by Us in providing such Services.
            <br/>d. Refund shall only be considered once the Customer concerned produces relevant documents and proof.
            <br/>e. Once qualified, the refunds are applied to the original payment option.
            <br/>f. The request for a refund of Services can be made in the following manner:
            you can send a mail to info@socialagent.in
            </>
        },
        {
            title:`Order Not Confirmed but Amount Deducted`,
            content:<>
            a. If the amount has been deducted and the order is not confirmed, please do contact Your respective bank. It takes 7 (seven) Business Days to reverse back the amount by the respective bank.
            <br/>b. If the issue has not been resolved within 7 (seven) Business Days, you can contact Our customer care support as follows: info@socialagent.in +918971719955.
            </>
        },
        {
            title:`Exemptions`,
            content:<>
            a. Notwithstanding the other provisions of this Policy, We may refuse to provide a refund for a service if:
            <br/>I. You knew or were made aware of the problem(s) with the service before you availed it.
            <br/>II. Free Services.
            <br/>III. Refund requests are placed after the refund window is closed.
            <br/>b. Apart from the above, the following exemptions are applicable when it comes to the refund:
            <br/>Social Media Marketing, Email Marketing, SMS Marketing, Website Development, Online Reputation Management, Search Engine Marketing.
            </>
        },
        {
            title:`Your Data`,
            content:<>
            The privacy of your data supplied to Us during the return and refund procedure is also governed by our privacy policy, which can be accessed under the following link: www.socialagent.in/privacy-policy.
            </>
        },
        {
            title:`Response Time`,
            content:<>
            a. Refunds are normally processed within 14 Business Days after checking the veracity of the refund request.
            <br/>b. The period of refund may also depend on various banking and payment channels, and We will not be liable for any errors or delays in a refund due to banks or third-party service providers.
            <br/><br/>A request for return or refund once made can be cancelled by contacting customer care at info@socialagent.in +918971719955.
            </>
        },
        {
            title:`Refusal of Return or Refund Request`,
            content:<>
            We reserve the right to refuse any request for a refund if such request is not in compliance with this Policy or applicable laws.
            </>
        },
        {
            title:`Contact Us`,
            content:<>
            For any feedback, concern, or query, You may please reach out to Us on the contact details below.
            <br/>
            <br/>
            Email: info@socialagent.in 
            <br/>Contact us: +918971719955
            </>
        }
    ]

    return(
        <div>
            <HeroBanner data={bannerContent}/>
            <PolicyContent policyDesc={policyDesc}/>
        </div>
    );  
}

export default termsConditions;