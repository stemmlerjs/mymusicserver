
  module.exports = {
  /*  
   *  MEDIA_HOME: This is the absolute file path that our app looks at for all files to add
   *  to the mongodb database.
   */

    MEDIA_HOME: 'C:\\Users\\Khalil\\Documents/Music/',

    ready: function(initApplication) {

      require('./mongo')
        .then(initApplication)
    }
  }

