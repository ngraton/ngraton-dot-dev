const config = {
  siteTitle: "Dev Site of Nic Graton", // Site title.
  siteTitleShort: "ngraton.dev", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "The software development site of Nic Graton", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://ngraton.dev", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Personal Website of Nic Graton, containing posts and tutorials on Software Development, as well as random essays on pop culture, video games, the 1980s and whatever else comes to mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 6, // Amount of posts displayed per listing page.
  userName: "ngraton", // Username to display in the author segment.
  userEmail: "mail@ngraton.dev", // Email used for RSS feed's author segment
  userTwitter: "@NicGraton", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Cleveland, Ohio", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "I am a computational thinker with a passion for technology and a call to service. I served eight years as an Artillery Officer in the U.S. Army. Currently, I enjoy solving problems as a Software Engineer at Axuall.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/ngraton/ngraton-dot-dev.git",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:mail@ngraton.dev",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Nic Graton", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
