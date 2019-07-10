describe('Albums View', function () {
  beforeEach(function () {
    this.view  = new AlbumsView({ collection: albumsScaffold });
  });

  it('should have a collection property assigned', function () {
    expect(this.view.collection).toBeDefined();
    expect(this.view.collection.length).toBe(albumsScaffold.length);
  });

  it('should have a Handlebars template compiled', function () {
    expect(this.view.template).toBeDefined();
  });

  it('should render to an #albums container when render is called', function () {
    this.view.render();

    expect($('#albums li').length).toBe(albumsScaffold.length);
  });

  it('should re-render the view when the collection changes', function () {
    const model = albumsScaffold.findWhere({ artist: 'Tori Kelly' });
    let originalHtml;
    let newHtml;

    this.view.render();
    originalHtml = $('#albums').html();
    model.set('title', 'The JavaScripts');
    newHtml = $('#albums').html();

    expect(originalHtml).not.toEqual(newHtml);
  });
});
