'use strict';

describe('dashboard', function() {
  describe('index', function() {
    it('should display the correct title', function() {
      // in the video, I used the protractor.getInstance() which was removed shortly thereafter in favor of this browser approach
      browser.get('/#');
      expect(browser.getTitle()).toBe('Learning Exercise');
    });

    it('should have toolbar tools', function() {
      var el = by.css('.md-toolbar-tools');
      expect(browser.isElementPresent(el)).toBe(true);
    });
  });
});
