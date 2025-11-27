/* eslint-disable react/no-unescaped-entities */
"use client";

import { useLanguage } from "@/contexts/LanguageContext";

function TermsEN() {
  return (
    <div className="space-y-6 text-sm md:text-[15px] leading-relaxed text-gray-700">
      <p className="text-gray-500">
        Last updated: {new Date().getFullYear()}
      </p>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">1. About this site</h2>
        <p>
          This website is operated by Jackie Chen Group Limited (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), a company established in Hong Kong. 
          The site provides a high-level overview of the types of projects and partnerships we may work on. 
          It is intended for general information only.
        </p>
        <p>
          Nothing on this site constitutes an offer, invitation, recommendation or solicitation to the public to enter into 
          any transaction, provide funding, make an investment or purchase any product or service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">2. Nature of information</h2>
        <p>
          The content on this site is descriptive and illustrative in nature. It is not tailored to any person or organisation 
          and should not be relied upon as business, financial, legal, tax or professional advice.
        </p>
        <p>
          Any cooperation, engagement or project between us and a partner will be governed solely by specific written agreements 
          entered into between the parties. This site does not form part of any such agreement.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">3. Use of the site</h2>
        <p>You may view and download content from this site for internal reference, provided that you:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Do not remove or alter copyright or proprietary notices;</li>
          <li>Do not modify materials in a way that misrepresents their meaning or origin;</li>
          <li>
            Do not use content in any manner that suggests we are making any form of public invitation, guarantee or performance commitment.
          </li>
        </ul>
        <p>
          We may modify, suspend or discontinue any part of the site at any time without prior notice.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">4. Intellectual property</h2>
        <p>
          Unless otherwise stated, all text, graphics, logos and materials on this site are owned or licensed by 
          Jackie Chen Group Limited. You may not reproduce, distribute, publish or create derivative works from 
          any part of this site for commercial purposes without our prior written consent.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">5. Third-party links</h2>
        <p>
          This site may contain links to third-party websites or resources. These are provided for convenience only. 
          We do not control or endorse third-party content, products or services, nor are we responsible for their 
          compliance with law or industry standards.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">6. No warranties</h2>
        <p>
          The information on this site is provided on an &quot;as is&quot; and &quot;as available&quot; basis. While we aim to keep 
          content accurate and current, we make no representations or warranties, express or implied, regarding:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The accuracy, completeness or timeliness of information;</li>
          <li>The suitability of content for any particular purpose;</li>
          <li>The uninterrupted or error-free operation of the site.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">7. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, we are not liable for any loss or damage (including indirect or 
          consequential loss, loss of profits, data loss or business interruption) arising from:
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Your access to or use of this site;</li>
          <li>Your reliance on any content or materials on this site;</li>
          <li>Any delay, interruption, error or omission in the site&apos;s operation.</li>
        </ul>

        <p>
          Nothing in these terms limits liabilities that cannot be excluded under applicable law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">8. Governing law and jurisdiction</h2>
        <p>
          These Terms and any non-contractual obligations arising from them are governed by the laws of 
          the Hong Kong Special Administrative Region (&quot;Hong Kong&quot;).
        </p>
        <p>
          Any dispute arising out of or relating to this site or these Terms shall be subject to the exclusive 
          jurisdiction of the courts of Hong Kong.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">9. Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. The &quot;Last updated&quot; date at the top indicates the latest version. 
          By continuing to use this site after updates, you are deemed to accept the revised Terms.
        </p>
      </section>

      <section className="space-y-3 pb-4">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">10. Contact</h2>
        <p>
          For any questions regarding these Terms, please contact:
          <br />
          Jackie Chen Group Limited
          <br />
          Room A7, 12/F, Star House, 34 Ashley Road, Tsim Sha Tsui, Hong Kong
          <br />
          Email: Jackie.chen.hk@outlook.com
        </p>
      </section>
    </div>
  );
}

function TermsZH() {
  return (
    <div className="space-y-6 text-sm md:text-[15px] leading-relaxed text-gray-700">
      <p className="text-gray-500">最后更新日期：{new Date().getFullYear()}</p>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">1. 关于本网站</h2>
        <p>
          本网站由 Jackie Chen Group Limited（&quot;本公司&quot;、&quot;我们&quot;）运营，注册地位于香港。本网站仅以概括方式介绍我们可能参与的项目类型及合作方式，
          供有兴趣的机构了解，并不构成向公众作出的任何形式之要约、邀请、建议或招揽。
        </p>
        <p>
          本站内容不构成对任何人士就投资、融资、服务采购或其他交易的公开邀约或保证。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">2. 信息性质</h2>
        <p>
          本网站所载资料仅为一般性说明，并非针对任何特定人士或机构的需求而设计，不应视为商业、财务、法律、税务或其他专业意见。
        </p>
        <p>
          如与本公司实际开展合作、项目或服务，双方权利义务应以另行签署之书面协议为准，本网站内容并不构成任何此类协议的一部分。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">3. 使用本网站</h2>
        <p>您可在以下条件下，将本网站的内容用于内部参考：</p>

        <ul className="list-disc pl-5 space-y-1">
          <li>不得删除或修改任何版权或所有权声明；</li>
          <li>不得以歪曲原意或来源的方式修改内容；</li>
          <li>
            不得以可能被理解为本公司向公众发出邀约、保证回报或承诺业绩的方式使用本站内容。
          </li>
        </ul>

        <p>
          我们保留在未作事先通知的情况下，随时修改、暂停或终止本站全部或部分功能的权利。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">4. 知识产权</h2>
        <p>
          除另有说明外，本网站上的文字、图像、标识及其他资料之版权及相关权利均由 Jackie Chen Group Limited 
          拥有或获合法授权。未经本公司事先书面同意，您不得就本网站任何内容进行复制、发布、发行或用于商业用途。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">5. 第三方链接</h2>
        <p>
          本站可能包含指向第三方网站或资源的链接，该等链接仅为提供方便。本公司对第三方的网站内容、产品或服务不作任何保证或声明，
          亦不对其是否符合法律或行业规范承担责任。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">6. 免责声明</h2>
        <p>本网站按&quot;现状&quot;及&quot;可得&quot;基础提供。本公司不对以下事项作出任何明示或暗示保证：</p>

        <ul className="list-disc pl-5 space-y-1">
          <li>资料的准确性、完整性或及时性；</li>
          <li>内容对任何特定用途的适合性；</li>
          <li>网站运作不会中断或不存在错误。</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">7. 责任限制</h2>
        <p>
          在适用法律允许的最大范围内，本公司概不就任何因下列情况而引致或相关的损失或损害承担责任（包括但不限于间接损失、利润损失、资料遗失或业务中断）：
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>您访问或使用本网站；</li>
          <li>您依赖本网站的任何内容；</li>
          <li>本网站运作的任何延误、中断、错误或遗漏。</li>
        </ul>

        <p>本条款不限制根据适用法律不能被排除或限制的法律责任。</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">8. 适用法律及管辖</h2>
        <p>本《使用条款》及相关非合约义务受香港特别行政区（&quot;香港&quot;）法律管辖并按其解释。</p>
        <p>因本网站或本条款引起之争议，均由香港法院专属管辖。</p>
      </section>

      <section className="space-y-3 pb-4">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">9. 条款之修改</h2>
        <p>
          我们可能不时更新本《使用条款》。页面顶部的&quot;最后更新日期&quot;显示最新版本。您在更新后继续使用本网站，即代表您接受更新后的条款。
        </p>
      </section>

      <section className="space-y-3 pb-4">
        <h2 className="font-semibold text-gray-900 text-base md:text-lg">10. 联系方式</h2>
        <p>
          如对本《使用条款》有任何疑问，请联络：
          <br />
          Jackie Chen Group Limited
          <br />
          香港尖沙咀亚士厘道 34 号天星大厦 12 楼 A7 室
          <br />
          电邮：Jackie.chen.hk@outlook.com
        </p>
      </section>
    </div>
  );
}

const TermsPageClient: React.FC = () => {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-wide text-emerald-700 font-semibold">
            {language === "en" ? "Legal" : "法律信息"}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {language === "en" ? "Terms of Service" : "使用条款"}
          </h1>

          <p className="mt-3 text-gray-600 max-w-2xl">
            {language === "en"
              ? "Important information about the use of this site."
              : "有关使用本网站的重要说明。"}
          </p>
        </header>

        <section className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(15,23,42,0.04)] border border-gray-100 px-6 py-8 md:px-10 md:py-10">
          {language === "en" ? <TermsEN /> : <TermsZH />}
        </section>
      </div>
    </main>
  );
};

export default TermsPageClient;
