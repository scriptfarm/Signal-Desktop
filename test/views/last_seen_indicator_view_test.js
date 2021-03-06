/*
 * vim: ts=4:sw=4:expandtab
 */
describe('LastSeenIndicatorView', function() {
    it('renders provided count', function() {
        var view = new Whisper.LastSeenIndicatorView({count: 10});
        assert.equal(view.count, 10);

        view.render();
        assert.match(view.$el.html(), /10 Unread Messages/);
    });

    it('renders count of 1', function() {
        var view = new Whisper.LastSeenIndicatorView({count: 1});
        assert.equal(view.count, 1);

        view.render();
        assert.match(view.$el.html(), /1 Unread Message/);
    });

    it('increments count', function() {
        var view = new Whisper.LastSeenIndicatorView({count: 4});

        assert.equal(view.count, 4);
        view.render();
        assert.match(view.$el.html(), /4 Unread Messages/);

        view.increment(3);
        assert.equal(view.count, 7);
        view.render();
        assert.match(view.$el.html(), /7 Unread Messages/);
    });

});
