<!DOCTYPE html>
<html lang="en">

<head>
  <title>BEE Plugin - Integration Example</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style type="text/css">
    * {
      margin: 0px;
      padding: 0px;
    }

    body {
      overflow: hidden;
      background-color: #CCCCCC;
      color: #000000;
    }

    #bee-plugin-container {
      position: absolute;
      top: 5px;
      bottom: 30px;
      left: 5px;
      right: 5px;
    }

    #integrator-bottom-bar {
      position: absolute;
      height: 25px;
      bottom: 0px;
      left: 5px;
      right: 0px;
    }
  </style>
  
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
</head>

<body>

  <div id="bee-plugin-container"></div>
  <div id="integrator-bottom-bar">
    <!-- You can change the download function to get the JSON and use this input to load it -->
    Select template to load:
    <input id="choose-template" type="file" />
    <!-- You need to provide a send function to use this input field -->
    Send test e-mail to:
    <input id="integrator-test-emails" type="text" />
  </div>

</body>

<script src="/assets/libraries/beefree/Blob.js"></script>
<script src="/assets/libraries/beefree/fileSaver.js"></script>
<script src="/assets/libraries/beefree/BeePlugin.js"></script>

<script type="text/javascript">

  var request = function (method, url, data, type, callback) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
      if (req.readyState === 4 && req.status === 200) {
        var response = JSON.parse(req.responseText);
        callback(response);
      } else if (req.readyState === 4 && req.status !== 200) {
        console.error('Access denied, invalid credentials. Please check you entered a valid client_id and client_secret.');
      }
    };

    req.open(method, url, true);
    if (data && type) {
      if (type === 'multipart/form-data') {
        var formData = new FormData();
        for (var key in data) {
          formData.append(key, data[key]);
        }
        data = formData;
      }
      else {
        req.setRequestHeader('Content-type', type);
      }
    }

    req.send(data);
  };

  var save = function (filename, content) {
    saveAs(
      new Blob([content], { type: 'text/plain;charset=utf-8' }),
      filename
    );
  };

  var specialLinks = [{
    type: 'unsubscribe',
    label: 'SpecialLink.Unsubscribe',
    link: 'http://[unsubscribe]/'
  }, {
    type: 'subscribe',
    label: 'SpecialLink.Subscribe',
    link: 'http://[subscribe]/'
  }];

  var mergeTags = [{
    name: 'tag 1',
    value: '[tag1]'
  }, {
    name: 'tag 2',
    value: '[tag2]'
  }];

  var mergeContents = [{
    name: 'content 1',
    value: '[content1]'
  }, {
    name: 'content 2',
    value: '[content1]'
  }];

  function userInput(message, sample) {
    return function handler(resolve, reject) {
      var data = prompt(message, JSON.stringify(sample))
      return (data == null || data == '')
        ? reject()
        : resolve(JSON.parse(data))
    }
  }

  var beeConfig = {
    uid: 'test1-clientside',
    container: 'bee-plugin-container',
    autosave: 15,
    language: 'en-US',
    trackChanges: true,
    specialLinks: specialLinks,
    mergeTags: mergeTags,
    mergeContents: mergeContents,
    contentDialog: {
      specialLinks: {
        label: 'Add a custom Special Link',
        handler: userInput('Enter the deep link:', {
          type: 'custom',
          label: 'external special link',
          link: 'http://www.example.com'
        })
      },
      mergeTags: {
        label: 'Add custom tag 2',
        handler: userInput('Enter the merge tag:', {
          name: 'name',
          value: '[name]'
        })
      },
      mergeContents: {
        label: 'Choose a custom merge content',
        handler: userInput('Enter the merge content:', {
          name: 'my custom content',
          value: '{my-custom-content}'
        })
      },
      rowDisplayConditions: {
        label: 'Open builder',
        handler: userInput('Enter the row display condition:', {
          type: 'People',
          label: 'Person is a developer',
          description: 'Check if a person is a developer',
          before: "{if job == 'developer'}",
          after: '{endif}'
        })
      },
    },
    onChange: function (jsonFile, response) {
      //console.log('json', jsonFile);
      //console.log('response', response);
    },
    onSave: function (jsonFile, htmlFile) {
      //save('newsletter.html', htmlFile);
        @if($id == 'default')
        $.ajax({
            url:'/beefree_builder_save_default',
            data: {id: '{{$id}}', html_file:htmlFile, json_file:jsonFile },
            type:'post',
            success:function(data){
                //alert('Saved.');
                //console.log('saved');
                //window.close();
            }
        });
        @else
        $.ajax({
            url:'/beefree_builder_save',
            data: {id: {{$id}}, html_file:htmlFile, json_file:jsonFile },
            type:'post',
            success:function(data){
                //alert('Saved.');
                //console.log('saved');
                //window.close();
            }
        });
        @endif
    },
    onSaveAsTemplate: function (jsonFile) { // + thumbnail? 
      //save('newsletter-template.json', jsonFile);
    },
    onAutoSave: function (jsonFile) { // + thumbnail? 
      //console.log(new Date().toISOString() + ' autosaving...');
      window.localStorage.setItem('newsletter.autosave', jsonFile);
    },
    onSend: function (htmlFile) {
      //write your send test function here
    },
    onError: function (errorMessage) {
      //console.log('onError ', errorMessage);
    }
  };

  var bee = null;

  var loadTemplate = function (e) {
    var templateFile = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function () {
      var templateString = reader.result;
      var template = JSON.parse(templateString);
      bee.load(template);
    };

    reader.readAsText(templateFile);
  };

  document.getElementById('choose-template').addEventListener('change', loadTemplate, false);
  var client_id = '{!! $client_id !!}';
  var client_secret = '{!! $client_secret !!}';
  request(
    'POST',
    'https://auth.getbee.io/apiauth',
    'grant_type=password&client_id='+client_id+'&client_secret='+client_secret,
    'application/x-www-form-urlencoded',
    function (token) {
      BeePlugin.create(token, beeConfig, function (beePluginInstance) {
        bee = beePluginInstance;
        @if(!empty($template_json))
            bee.start({!! $template_json !!});
        @else
        request(
          'GET',
          'https://rsrc.getbee.io/api/templates/m-bee',
          null,
          null,
          function (template) {
            bee.start(template);
          });
          @endif
      });
    });

</script>

</html>