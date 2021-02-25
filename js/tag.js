$("[data-tag]").click((e) => {
    const currentTag = e.target.dataset.tag;
    filterByTagName(currentTag);
  })
  
  function filterByTagName(tagName) {
    $('.hidden').removeClass('hidden');
    $('.catalogue-item').each((index, elem) => {
      if (!elem.hasAttribute(`data-${tagName}`)) {
        $(elem).addClass('hidden');
      }
    });
    $(`.tag`).removeClass('selected');
    $(`.tag[data-tag=${tagName}]`).addClass('selected');
  }