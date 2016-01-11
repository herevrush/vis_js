import csv
import simplejson,decimal, codecs

csvfile = open("../resources/Train_Station_Barrier_Counts_2004-2014.csv", 'r')
# jsonfile = open('db_input.json', 'w')

fieldnames = ('LINE','STATION','YEAR','SURVEY_DATE_USED','WHETHER_SURVEYED','IN_0200_0600','OUT_0200_0600','IN_0600_0930','OUT_0600_0930','IN_0930_1500','OUT_0930_1500',	'IN_1500_1830','OUT_1500_1830','IN_1830_0200','OUT_1830_0200','IN_24_HOURS','OUT_24_HOURS','RANK','STATION_SORT_ID')
reader = csv.DictReader( csvfile, fieldnames)
with codecs.open("db_input.json", "w", encoding="utf-8") as out:
   for r in reader:
      for k, v in r.items():
         # make sure nulls are generated
         if not v:
            r[k] = None
         # parse and generate decimal arrays
         elif k == "loc":
            r[k] = [decimal.Decimal(n) for n in v.strip("[]").split(",")]
         # generate a number
         elif k == "geonameid":
            r[k] = int(v)
      out.write(simplejson.dumps(r, ensure_ascii=False, use_decimal=True)+"\n")
# for row in reader:
#     json.dump(row, jsonfile)
#     jsonfile.write('\n')