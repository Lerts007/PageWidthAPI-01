<template>
  <footer>
    <div class="footerTop">
      <div class="footerTop-left">
        <p>Is there a project?</p>
        <h3>Let's work together</h3>
      </div>
      <div class="footerTop-right">
        <p class="footerTop-right--title">For all questions</p>
        <address>
          <a href="tel:+79202780068">+7 (920) 278-00-68</a>
          <a href="mailto:qtim@agency.com">qtim@agency.com</a>

          <p class="footerTop-right--title">Office in Russia</p>
          <p>139 Ruben Station Lake Drew, NM 52678</p>
          <img src="/public/button location.svg" alt="" />

          <p class="footerTop-right--title">Office in Dubai</p>
          <p>139 Ruben Station Lake Drew, NM 52678</p>
          <img src="/public/button location.svg" alt="" />
        </address>
      </div>
    </div>
    <div class="footerBottom">
      <div class="footerBottom-link">
        <linkFooter :link="'http://www.facebook.com'" :name="'Facebook'" />
        <linkFooter :link="'http://www.instagram.com'" :name="'Instagram'" />
        <linkFooter :link="'https://telegram.org'" :name="'Telegram'" />
      </div>
      <div class="footerGo">Go</div>
      <div class="footerBG"></div>
      <div class="footerBottom-link">
        <linkFooter :link="'https://www.behance.net'" :name="'Behance'" />
        <linkFooter :link="'https://www.linkedin.com'" :name="'Linkedn'" />
        <linkFooter
          :link="'https://wikipedia.org/wiki/Privacy_policy'"
          :name="'Privacy Policy'"
        />
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  height: 900px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: $accent;
}
.footerTop {
  display: flex;
  justify-content: center;
}

.footerTop-left {
  width: 464px;

  margin-top: 140px;
  margin-right: 144px;
  & p {
    @include TT_Commons-16;
  }
  & h3 {
    @include TT_Commons-112;
  }
}
.footerTop-right {
  @include TT_Commons-16;

  width: 152px;

  margin-top: 215px;
  margin-left: 224px;

  & .footerTop-right--title {
    margin-top: 36px;
    margin-bottom: 12px;
    &:first-child {
      margin-top: 0;
    }
  }

  img {
    margin-top: 8px;
  }
}

.footerBottom {
  position: relative;

  display: flex;
  justify-content: space-around;
}
.footerBottom-link {
  padding-bottom: 30px;

  display: flex;
  gap: 32px;
}
.footerGo {
  @include TT_Commons-32;

  position: relative;
  z-index: 2;

  color: #fff;
}
.footerBG {
  position: absolute;
  left: calc(50% - 179px);
  bottom: 0;
  z-index: 1;

  width: 358px;
  height: 179px;

  border: none;
  border-top-left-radius: 179px;
  border-top-right-radius: 179px;
  background-color: $black;
}
</style>
