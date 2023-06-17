import HeroBanner from "@/Components/Policy/HeroBanner";
import PolicyContent from "@/Components/Policy/policyContent";

const termsConditions = () => {

    const bannerContent = {
        title:`Website Cookies Policy`,
        desc:`Lorem ipsum dolor sit amet consectetur. Consectetur feugiat bibendum mattis sed vel maecenas gravida faucibus.`,
    }

    const policyDesc = [
        {
            title:`General`,
            content:<>
            a. This Website with the URL of https://socialagent.in ("Website/Site") is operated by Bricstal Digital Private Limited ("We/Our/Us"). We are committed to protecting and respecting your privacy. We do use cookies and process your personal data in accordance with the IT Act, 2000 (21 of 2000) and other national and state laws which relate to the processing of personal data. Please read the following carefully to understand our views and practices regarding your personal data.
            <br/>b. Our cookies policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Site, your choices regarding cookies and further information about cookies.
            <br/>c. We do use cookies in order to provide and continually improve our products and services.
            <br/>d. The cookies we use do not store personally identifiable information nor can they harm your computer.
            <br/>e. By using this Site, you consent to use the cookies. If you do not agree to such use, please refrain from using this Website.
            </>
        },
        {
            title:`Cookies`,
            content:<>
            a. Cookies are a small piece of data stored on your device when you visit the Site. Cookies can be "persistent" and "session" cookies. Session cookies are deleted after you close the browser. Persistent cookies (long-term cookies) remain on your computer and permit their recognition on your next visit. This allows us to improve your access to our Site. This helps us to learn more about your interests, and provide you with essential features and services.
            <br/>b. Following are the types of cookies we use on our Website:
            <br/>I. Required cookies: These cookies are essential for our Websites and service to perform basic functions and are necessary for us to operate certain features. These include those required to allow registered users to authenticate and perform account related functions, store preference set by users.
            <br/>II. Functionality cookies: These cookies allow Us to remember choices you make (such as your username, language or the region you are in) and provide more enhanced personal features. These cookies cannot track your browsing activity on other Websites.
            <br/>III. Analytics and Performance Cookies: These cookies allow Us to optimize performance by collecting information on how users interact with our Site, including which pages are visited most, as well as other analytical data. We use these details to improve how our Site functioning and to understand how users interact with them.
            <br/>IV. Advertising cookies: These cookies are set by Us and Our advertising partners to provide you with relevant content and to understand that content's effectiveness. They may be used to collect information about your online activities over time and across different websites to predict your preference and to display more relevant advertisements to you, muting ads you have chosen to stop seeing, and limit the number of times you see an advertisement. These cookies allow a profile to be built about you and your interests and enable personalized ads to be shown to you based on your profile.
            <br/>c. The cookies we use do not collect any personal data stored on your hard drive or computer.
            </>
        },
        {
            title:`How We Use Cookies`,
            content:<>
            a. When you use and access the Website, we may place a number of cookies files in your browser.
            <br/>b. We use the cookies for the following purposes:
            <br/>I. To enable certain functions of the Site.
            <br/>II. Keeping track of items stored in your shopping basket.
            <br/>III. Conducting research and diagnostics to improve the content, products, and services.
            <br/>IV. Preventing fraudulent activity.
            <br/>V. Improving security.
            <br/>c. Our cookies allow you to take advantage of some of our essential features. For instance, if you block or otherwise reject our cookies, you will not be able to add items to your shopping basket, proceed to checkout, or use any products or services that require you to sign in.
            <br/>4. THIRD-PARTY COOKIES
            <br/>a. Approved third parties also may set cookies when you interact with Our services.
            <br/>b. Third parties include search engines, providers of measurement and analytics services, social media networks, and advertising companies.
            <br/>c. Third parties use cookies in the process of delivering content, including ads relevant to your interests, to measure the effectiveness of their ads, and to perform services on behalf of Us.
            <br/>d. The list of third-party cookies along with their purpose is as mentioned below:
            <br/>1. Google Analytics - to track website traffic and utilization - effective for 6 months;2. Facebook Audience - for remarketing and analysis - effective for 3 months.
            <br/>e. The third-party cookies may be collecting the following information from you when you use this Site:
            <br/>IP address and time of visit, the record of pages you have visited and the time spent on each page.
            </>
        },
        {
            title:`Consent And Cookies`,
            content:<>
            a. Generally, we ask you to consent to the use of cookies on this Site. But, in the case of required cookies, consent may not be asked and it will be implied that you have consented to the use of the same.
            </>
        },
        {
            title:`Changes To This Policy`,
            content: <>
            We may change this policy from time to time. If we make any changes to this policy, we will change the "Last Updated" date above. You agree that your continued use of our services after such changes have been published to our services will constitute your acceptance of such revised policy.
            </>
        },
        {
            title:`YOUR CHOICES REGARDING COOKIES`,
            content:<>
            You can prevent the storage of cookies by choosing a "disable cookies" option in your browser settings. Most browsers allow you to manage how cookies are set and used as you're browsing, and to clear cookies and browsing data. Some browsers allow controlling the functionality such as the length of time they are stored either through built-in functionality or by utilizing third-party plugins. But this can limit the functionality of our services.
            </>
        },
        {
            title:`Contact Us`,
            content:<>
            In case you have any suggestions, queries or complains, please contact Us using the following details:
            <br/>info@socialagent.in+918971719955
            </>
        }
    ];

    return(
        <div>
            <HeroBanner data={bannerContent}/>
            <PolicyContent policyDesc={policyDesc}/>
        </div>
    );  
}

export default termsConditions;