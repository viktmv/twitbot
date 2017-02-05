'use strict'

const config = require('./config.js');
const twit = require('twit');
const Twitter = new twit(config)

const retweet = function() {
    let params = {
        q: '#Javascript, #Toronto',
        result_type: 'recent',
        lang: 'en'
    }

    Twitter.get('search/tweets', params, (err, data) => {
        if (!err) {
            let retweetId = data.statuses[0].id_str
            Twitter.post('statuses/retweet/:id', {
                id: retweetId
                }, (err, response) => {
                if (response) console.log('retweet succesfull!')
                if (err) console.log('retweet failed')
            })
        }
        else console.log('search failed')
    })
}

setInterval(retweet, 10000)
