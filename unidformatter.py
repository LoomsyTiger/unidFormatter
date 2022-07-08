def unid_formatter(unid_url):
    unid = unid_url.partition("unid=")[2]
    eight = unid[0:8]
    four1 = unid[8:12]
    four2 = unid[12:16]
    four3 = unid[16:20]
    twelve = unid[20:]
    delimiter = "-"
    formatted = (eight+delimiter+four1+delimiter+four2+delimiter+four3+delimiter+twelve)
    return formatted

print(unid_formatter("https://steltix.support.topdesk.net/tas/secure/operator?unid=7b71b2cfa9b14b5396d3e97123f6c42a"))