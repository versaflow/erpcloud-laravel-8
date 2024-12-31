<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Stripo Email Builder</title>
    <style>
        #externalSystemContainer {
            background-color: darkgrey;
            padding: 5px 0 5px 20px;
        }
        #undoButton, #redoButton {
            display: none;
        }
        #stripoSettingsContainer {
            width: 400px;
            float: left;
        }
        #stripoPreviewContainer {
            width: calc(100% - 400px);
            float: left;
        }
        .notification-zone {
            position: fixed;
            width: 400px;
            z-index: 99999;
            right: 20px;
            bottom: 80px;
        }
        .control-button {
            border-radius: 17px;
            padding: 5px 10px;
            border-color: grey;
        }
        #changeHistoryLink {
            cursor: pointer;
        }
     
    </style>
</head>
<body>
    <div id="externalSystemContainer">
        <!--This is external system container where you can place plugin buttons -->
        <button id="Save" class="control-button">Save</button>
        <button id="undoButton" class="control-button">Undo</button>
        <button id="redoButton" class="control-button">Redo</button>
        <button id="codeEditor" class="control-button">Code editor</button>
        <span id="changeHistoryContainer" style="display: none;">Last change: <a id="changeHistoryLink"></a></span>
    </div>
    <div class="notification-zone"></div>
    <div>
        <!--Plugin containers -->
        <div id="stripoSettingsContainer">Loading...</div>
        <div id="stripoPreviewContainer"></div>
    </div>

    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30=" crossorigin="anonymous"></script>

	<script src="{{ '/assets/libraries/stripo/notifications.js' }}" type="text/javascript"></script>
    <script>
        // Utility methods
        function request(method, url, data, callback) {
            var req = new XMLHttpRequest();
            req.onreadystatechange = function () {
                if (req.readyState === 4 && req.status === 200) {
                    callback(req.responseText);
                } else if (req.readyState === 4 && req.status !== 200) {
                    console.error('Can not complete request. Please check you entered a valid PLUGIN_ID and SECRET_KEY values');
                }
            };
            req.open(method, url, true);
            if (method !== 'GET') {
                req.setRequestHeader('content-type', 'application/json');
            }
            req.send(data);
        }

        function loadDemoTemplate(callback) {
            request('GET', '/stripo_html/{{$email_id}}', null, function(html) {
                request('GET', '/stripo_css/{{$email_id}}', null, function(css) {
                    callback({html: html, css: css});
                });
            });
        }
    </script>

    <script>
        // Call this function to start plugin.
        // For security reasons it is STRONGLY recommended NOT to store your PLUGIN_ID and SECRET_KEY on client side.
        // Please use backend middleware to authenticate plugin.
        // See documentation: https://stripo.email/plugin-api/
        function initPlugin(template) {
            const apiRequestData = {
                emailId: {{$email_id}}
            };
            const script = document.createElement('script');
            script.id = 'stripoScript';
            script.type = 'text/javascript';
            script.src = 'https://plugins.stripo.email/static/latest/stripo.js';
            script.onload = function () {
                window.Stripo.init({
                    settingsId: 'stripoSettingsContainer',
                    previewId: 'stripoPreviewContainer',
                    codeEditorButtonId: 'codeEditor',
                    undoButtonId: 'undoButton',
                    redoButtonId: 'redoButton',
                    locale: 'en',
                    html: template.html,
                    css: template.css,
                    notifications: {
                        info: notifications.info.bind(notifications),
                        error: notifications.error.bind(notifications),
                        warn: notifications.warn.bind(notifications),
                        loader: notifications.loader.bind(notifications),
                        hide: notifications.hide.bind(notifications),
                        success: notifications.success.bind(notifications)
                    },
                    apiRequestData: apiRequestData,
                    userFullName: 'Plugin Demo User',
                    draft: { showAutoSaveLoader: function() {
                        //console.log('Auto save in process')
                        
                    }, hideAutoSaveLoader: function(error) {
                        //console.log('Auto save completed')
                        
                    } 
                        
                    },
                    versionHistory: {
                        changeHistoryLinkId: 'changeHistoryLink',
                        onInitialized: function(lastChangeIndoText) {
                            $('#changeHistoryContainer').show();
                        }
                    },
                    getAuthToken: function (callback) {
                        request('POST', 'https://plugins.stripo.email/api/v1/auth',
                            JSON.stringify({
                                pluginId: 'f1810aea44284c319396542382898e60',
                                secretKey: 'e978c97168134195be7001594f47d839'
   
                            }),
                            function(data) {
                                callback(JSON.parse(data).token);
                            });
                    }
                });
            };
            document.body.appendChild(script);
        }

        loadDemoTemplate(initPlugin);
        
        $(document).on('click','#Save', function(e){
         window.StripoApi.getTemplate((html, css)=>{
                $.ajax({
                    url:'/stripo_save',
                    data: {id: {{$email_id}}, html:html, css:css },
                    type:'post',
                    success:function(data){
                        //alert('Saved.');
                        //console.log('saved');
                        window.close();
                    }
                });
             
         })    
        });
    </script>
</body>
</html>