<template>
  <div class="page">
    <HeroBanner color="red"><h1><span>How You Can Help</span></h1></HeroBanner>
    <h3 class="intro">Contributor Guidelines</h3>
    <div>
      <h2>Welcome contributors to the project: Admit that you are eager for contributions and so happy they found themselves here.</h2>
      <h2>Table of Contents: If your CONTRIBUTING.md file is long, you might consider including a table of contents with links to different headings in your document. In github, each heading is given a URL by default, so you can link to that URL in the appropriate section of the Table of Contents for each heading. Do this in Markdown by wrapping the heading in [ ] and following with a parenthetical that includes the URL or header after # like [Reporting Bugs](#reporting-bugs).</h2>
      <h2>Short Links to Important Resources:</h2>
      <ul>
        <li>docs: handbook / roadmap (you'll learn more about this in the roadmapping session)</li>
        <li>bugs: issue tracker / bug report tool</li>
        <li>comms: forum link, developer list, IRC/email</li>
      </ul>
      <h2>Testing: how to test the project, where the tests are located in your directories.</h2>
      <h2>Environment details: how to set up your development environment. This might exist in the README.md depending on the project. If so, include a link.</h2>
      <h2>How to submit changes: Pull Request protocol etc. You might also include what response they'll get back from the team on submission, or any caveats about the speed of response.</h2>
      <h2>How to report a bug: Bugs are problems in code, in the functionality of an application or in its UI design; you can submit them through "bug trackers" and most projects invite you to do so, so that they may "debug" with more efficiency and the input of a contributor. Take a look at Atom's example for how to teach people to report bugs to your project.</h2>
      <h2>Templates: in this section of your file, you might also want to link to a bug report "template" like this one here which contributors can copy and add context to; this will keep your bugs tidy and relevant.</h2>
      <h2>First bugs for Contributors: Sometimes it is helpful to provide some guidelines for the types of bugs contributors should tackle (should they want to fix the bugs and not just submit them), see Atom's example section here.</h2>
      <h2>How to request an "enhancement" - enhancements are features that you might like to suggest to a project, but aren't necessarily bugs/problems with the existing code; there is a "label" for enhancments in Github's Issues (where you report bugs), so you can tag issues as "enhancement," and thereby allow contributors to prioritize issues/bugs reported to the project. See Atom's example section.</h2>
      <h2>Style Guide / Coding conventions - See Atom's example.</h2>
      <h2>Code of Conduct - You can make this part of CONTRIBUTING.md as Atom did to set the tone for contributions. You can also make this a separate Markdown file and link to it in CONTRIBUTING.md. You can also extend this section to link to your LICENSE.md or any details for project consumers on permissions and license details you have established for building on your work.</h2>
      <h2>Recognition model - provide a pre-emptive "thank you" for contributing and list any recognition contributors might receive for participating in your project.</h2>
      <h2>Who is involved? - Open Government's CONTRIBUTING.md has as a name/author, and it might be nice to have a more personal/friendly individual to attact to a project and reach out to with questions. You might list the core contributors and their preferred methods of contact here, or link to a humans.txt file in your root directory (same place as your CONTRIBUTING.md file), which lets people know who they are working. Here is an example of a humans.txt file.</h2>
      <h2>Where can I ask for help? - a nice extension to the previous section, with links to good comms channels for anyone with questions.</h2>
      <h2>https://github.com/CODESIGN2/Project-Structure</h2>
      <h2>Create a system for rewarding people
        (OPTIONAL) Include a humans.txt file to give accolades to contributors. Store this in your root directory just like your CONTRIBUTING.md. On deployment, it will be available via your website at www.YOURWEBSITE.com/humans.txt.

        (OPTIONAL) Get a DOI for a your project and make Contributor Badges as a way to recognize contributors for their particular contributions.

        Hat-tip or thank people in your README.md, especially if you forked their repo. Thank people when they submit issues or requests; be polite.</h2>
    </div>
  </div>
</template>

<script>
import HeroBanner from "@/components/blocks/HeroBanner";
export default {
  components: { HeroBanner },
  layout: 'Synthwave',
}
</script>

<style scoped>
h2{
  margin-bottom: 25px;
}
</style>
