import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import netscape.javascript.JSObject;

public class WebViewExample extends Application {

    @Override
    public void start(Stage primaryStage) {
        WebView webView = new WebView();
        WebEngine webEngine = webView.getEngine();

        // Füge eine DOMContentLoaded-Handler hinzu, um JavaScript auszuführen, wenn die Seite geladen ist
        webEngine.getLoadWorker().stateProperty().addListener((observable, oldValue, newValue) -> {
            if (newValue == javafx.concurrent.Worker.State.SUCCEEDED) {
                try {
                    // Führe JavaScript-Code in der WebView aus, um die WebKit-Version zu ermitteln
                    JSObject jsobj = (JSObject) webEngine.executeScript("window");
                    String webKitVersion = (String) jsobj.call("eval", "navigator.userAgent.match(/WebKit\\/(\\S+)/)[1];");
                    
                    System.out.println("WebKit-Version: " + webKitVersion);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });

        // Lade eine Beispiel-HTML-Seite
        webEngine.loadContent("<html><body>WebView Example</body></html>");

        Scene scene = new Scene(webView, 800, 600);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
