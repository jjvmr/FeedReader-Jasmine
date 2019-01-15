/* feedreader.js */

$(function() {
  describe('RSS Feeds', function() {
    it('variable should be defined and not empty', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    describe('allFeeds URLs', () => {
      it('should be defined and not be empty', () => {
        for(links of allFeeds) {
          expect(links.url).toBeDefined();
          expect(links.url).not.toBe()
        }
      });
    });
  
    describe('allFeeds Names', () => {
      it('should be defined and not be empty', () => {
        for(title of allFeeds) {
          expect(title.name).toBeDefined();
          expect(title.name).not.toBe()
        }
      });
    });
  });

  describe('The menu', () => {
    it('should be hidden by default', () => {
      const hideMenu = document.querySelector('body').classList.contains('menu-hidden');
      expect(hideMenu).toBe(true);
    });

    it('should toggle its visibility when the menu icon is clicked', () => {
      const menuButton = document.querySelector('.menu-icon-link');
      const body = document.querySelector('body')
      menuButton.click(); /** Clicking the menu icon removes the class 'menu-hidden' from body, making the menu visible */
      expect(body.classList.contains('menu-hidden')).toBe(false) 
      menuButton.click(); /** Clicking the menu applies the class to 'body', hiding the menu */
      expect(body.classList.contains('menu-hidden')).toBe(true)
    });
  });

  describe('Initial Entries', () => {
    beforeEach ((done) => {
      loadFeed(0);
      done();
    });

    it('should complete the work when loadFeed function is called', (done) => {
      let feedContainer = document.querySelector('.feed')
      expect(feedContainer.children.length).toBeGreaterThanOrEqual(0)
      done();
    });
  });

  describe('New Feed Selection', () => {
    const rssFeed = document.querySelector('.feed');
    const feedArr = [];

    beforeEach ((done) => {
      loadFeed(0);
      Array.from(rssFeed.children).forEach((displayed) => {
        feedArr.push(displayed.innerText)
      });
      loadFeed(1, done);
    });

    it('should change the content when a new feed is loaded', () => {
      Array.from(rssFeed.children).forEach((displayed, i)=>{
        let content = displayed.innerText;
        // console.log(content , feedArr[1], feedArr[0])
        expect(content === feedArr[i]).toBe(false);
      })
    });
  });
}())
