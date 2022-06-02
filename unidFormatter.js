const unidUrl = document.getElementById("secretlink")

function unidFormatter() {
  var delimiter, eight, formatted, four1, four2, four3, twelve, unid;
  unid = unidUrl.substring(unidUrl.indexOf('=') + 1);
  eight = unid.slice(0, 8);
  four1 = unid.slice(8, 12);
  four2 = unid.slice(12, 16);
  four3 = unid.slice(16, 20);
  twelve = unid.slice(20);
  delimiter = "-";
  formatted = eight + delimiter + four1 + delimiter + four2 + delimiter + four3 + delimiter + twelve;
  return formatted;
  Clipboard.writeText(formatted)
}

unidFormatter.call("https://msp.support.topdesk.net/tas/secure/incident?unid=c79a2a32c19c5208903cc8e6459fc81c")

